<template>
 <div id="detail">
    <detail-item  @detailitemclick="detailitemclick" ref="itemindexi"></detail-item>
     <scroll :probetype="3" class="content" ref="content"  @scrollnum="scrollnum">
    <Carousel autoplay  loop>
        <CarouselItem v-for="(item,index) in topImages" :key="index">
            <div class="demo-cf">
              <img class="swipeimg" :src="item" />
          </div>
        </CarouselItem>
      </Carousel>

       <div v-if="Object.keys(goods).length!==0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" @load="imgload" />
            <span>{{goods.services[index-1].name}}</span>
          </span>
        </div>
      </div>

      <div class="shop-info">
        <div class="shop-top">
          <img :src="shop.logo" alt />
          <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
            <div class="info-sells">
              <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
              <div class="sells-text">总销量</div>
            </div>
            <div class="info-goods">
              <div class="goods-count">{{shop.goodsCount}}</div>
              <div class="goods-text">全部宝贝</div>
            </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
            <table>
              <tr v-for="(item,index) in shop.score" :key="index">
                <td>{{item.name}}</td>
                <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                <td class="better" :class="{'better-more':item.isBetter}">
                  <span>
                    {{item
                    .isBetter?'高':'低'}}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="shop-bottom">
          <div class="enter-shop">进店逛街</div>
        </div>
      </div>
       <detail-param-info :paramInfo="paramInfo" ref="canshu" />
    <detail-comment-info :commentInfo="commentInfo" class="detail-set-scroll" ref="pingjia" />
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
   
    
    <detail-bottom-bar></detail-bottom-bar>
    <goods-list :goods="recommendList" ref="scroll"></goods-list>
</scroll>
 
    <div class="backtop" v-show="isshow" @click="backtop">
      <img src="@/assets/img/other/back-top.png" />
    </div>
 </div>

</template>

<script>
import DetailItem from "views/detail/detailitem.vue"
import DetailBottomBar from 'views/detail/DetailBottomBar.vue'
import DetailGoodsInfo from "views/detail/detailGoodsinfo.vue";
import DetailParamInfo from "views/detail/DetailParamInfo.vue";
import DetailCommentInfo from "views/detail/DetailCommentInfo.vue";
import GoodsList from "components/content/goodslist.vue";
import Scroll from "components/common/scroll.vue";
import { debounce } from "until/until.js";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
export default {
  name: "detail",
  components: {
    DetailItem,DetailBottomBar,DetailGoodsInfo,DetailParamInfo,DetailCommentInfo,GoodsList,Scroll
  },
  data() {
    return {
      iid: null,
      topImages: {
        type: Object,
        default() {
          null;
        },
      },
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      imagelistener: null,
      themescrollY: [],
      getthemescrollY: null,
      currentIndex: 0,
      isshow: false,
    };
  },filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.topImages = res.data.result.itemInfo.topImages;
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      this.detailInfo = res.data.result.detailInfo;
      this.shop = new Shop(res.data.result.shopInfo);
      //参数信息
      this.paramInfo = new GoodsParam(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
      //评论信息
      if (res.data.result.rate.cRate !== 0) {
        this.commentInfo = res.data.result.rate.list[0] || {};
      }
    });
    
    getRecommend().then((res) => {
      this.recommendList = res.data.data.list;
    });
    this.getthemescrollY = debounce(() => {
      this.themescrollY = [];
      this.themescrollY.push(0);
      this.themescrollY.push(this.$refs.canshu.$el.offsetTop);
      this.themescrollY.push(this.$refs.pingjia.$el.offsetTop);
      this.themescrollY.push(this.$refs.scroll.$el.offsetTop);
    });
  }, methods: {
     
    addEvent() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      /*    product.price=this.detailInfo.realPrice; */
      /* this.$store.commit('addProduct',product) */
      this.$store.dispatch("addProduct", product).then((res) => {
        this.$toast.showmessage(res, 2000);
      });
    },
  
    backtop() {
      this.$refs.content.scroll.scrollTo(0, 0, 800);
    },

   imgload() {
      this.$refs.content.refresh();
      this.getthemescrollY();
    },

    detailitemclick(index) {
      this.$refs.content.scroll.scrollTo(0, -this.themescrollY[index],200); 
     
    },
    scrollnum(position) {
      this.isshow = -position.y > 1000;
      const Y = -position.y;
      let length = this.themescrollY.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            Y >= this.themescrollY[i] &&
            Y < this.themescrollY[i + 1]) ||
            (i === length - 1 && Y >= this.themescrollY[i]))
        ) {
          this.currentIndex = i;

          this.$refs.itemindexi.indexclick = this.currentIndex;
        }
      }
    },
  },
 
};
</script>


<style>
#detail{
  height: 100vh;
}
#content{
  position: relative;
  z-index: 9;
  height:calc(100%-53px)
 
}
.swipeimg {
  position: relative;
  height: 330px;
  width: 100%;
}
.detail-item {
  position: relative;
  z-index: 7;
  background-color: white;
}
 
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
#detail {
  position: relative;
  z-index: 6;
  background-color: white;
}
.mint-swipe {
  height: 320px;
}
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .info-price {
  font-size: 24px;
  color: coral;
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
 
.backtop {
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px;
}
.backtop img {
  height: 35px;
  width: 33px;
}
.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: #556;
  border-radius: 8px;
  margin-left: 5px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}

.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top .title {
  margin-left: 10px;
  vertical-align: center;
}
.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
 
</style>