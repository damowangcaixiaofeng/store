<template>
  <div id="home">
    <navbar/>
    <div class="backtop" v-show="isshow"  @click="backtop">
      <img src="@/assets/img/other/back-top.png" />
    </div>
    <scroll class="content" ref="content" :probetype="3" :pullonload="true"
             @emitbacktop='isback'  @pullonload="pullonload">
      <!-- @pullonload="pullonload"
      @scrollnum="scrollnum"-->
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem v-for="(item,index) in banners" :key="index">
          <div class="demo-carousel">
            <a :href="item.link">
              <img class="swipeimg" :src="item.image" />
            </a>
          </div>
        </CarouselItem>
      </Carousel>
      <recommend :recommends="recommends"></recommend>
      <homecontrol @giclick="giclick" :controlitem="['流行','新款','精选']" class="homecontrolitem" />
      <br />
      <goods-list :goods="goods[clickindex].list" />
    </scroll>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/navbar.vue";
import Recommend from "views/home/recommend.vue";
import Homecontrol from "views/home/homecontrol.vue";
import GoodsList from "components/content/goodslist.vue";
import Scroll from "components/common/scroll.vue";

import { getHomeMultiData, getHomeGoods } from "network/home.js";
export default {
  data() {
    return {
      isshow:false,
      value2: 0,
      banners: [],
      recommends: [],
      clickindex: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    Navbar,
    Recommend,
    Homecontrol,
    GoodsList,
    Scroll, 
  },

  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");

    this.$bus.$on("imgloaded", () => {
      this.$refs.content.refresh();
    });
  },
  methods: {
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.content.scroll.finishPullUp();
      });
    },
    giclick(index) {
      /*  switch index  */
      switch (index) {
        case 0:
          this.clickindex = "pop";
          break;
        case 1:
          this.clickindex = "new";
          break;
        case 2:
          this.clickindex = "sell";
          break;
      }
    },
    isback(position){
      this.isshow=-position.y >1000 ;
    },
    backtop(){
       this.$refs.content.scroll.scrollTo(0,0,300)
    },
    //上拉加载
    pullonload(){
       this.getGoods(this.clickindex);
    }
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
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
.content {
  position: relative;
  height: calc(100% - 92px);
  top: 44px;
}
.swipeimg {
  position: relative;
  height: 220px;
  width: 100%;
}
.homecontrolitem {
  background-color: #fff;
  position: sticky;
  top: 44px;
}


</style>