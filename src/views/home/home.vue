<template>
  <div id="home">
    <navbar>
      <div slot="navbarcenter">
        商品
        <homecontrol
          class="hc"
          ref="homecontrol1"
          v-show="homecontroshow"
          :controlitem="['流行','新款','精选']"
          @giclick="giclick"
        />
      </div>
    </navbar>

    <scroll
      class="content"
      ref="content"
      :probetype="3"
      :pullonload="true"
      @scrollnum="isback"
      @pullonload="pullonload"
    >
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem v-for="(item,index) in banners" :key="index">
          <div class="demo-cf">
            <a :href="item.link">
              <img class="swipeimg" :src="item.image" />
            </a>
          </div>
        </CarouselItem>
      </Carousel>
      <recommend :recommends="recommends"></recommend>
      <homecontrol ref="homecontrol" :controlitem="['流行','新款','精选']" @giclick="giclick" />
      <br />
      <goods-list :goods="goods[clickindex].list" />
    </scroll>
    <div class="backtop" v-show="isshow" @click="backtop">
      <img src="@/assets/img/other/back-top.png" />
    </div>
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
      isshow: false,
      value2: 0,
      banners: [],
      recommends: [],
      clickindex: "pop",
      homecontroshow: false,
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
  },
  mounted() {
    const ref = this.debounce(this.$refs.content.refresh, 1000);
    this.$bus.$on("imgloaded", () => {
      this.$refs.content.refresh();
      ref();
    });
  },
  methods: {
    //防抖
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(args);
        }, delay);
      };
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.content.scroll.finishPullUp();
      });
    },
    giclick(index) {
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
      this.$refs.homecontrol.fastindext = index;
      this.$refs.homecontrol1.fastindext = index;
    },
    isback(position) {
      //显示隐藏
      this.isshow = -position.y > 1000;
      this.homecontroshow =
        -position.y > this.$refs.homecontrol.$el.offsetTop - 44;
        
    },
    backtop() {
      this.$refs.content.scroll.scrollTo(0, 0, 300);
    },
    //上拉加载
    pullonload() {
      this.getGoods(this.clickindex);
    },
  },
};
</script>

<style scoped>
.hc {
  box-shadow: 0 -1px 3px rgba(197, 92, 92, 0.3);
}
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
  height: calc(100% - 44px);
  overflow: hidden;
}
.swipeimg {
  position: relative;
  height: 220px;
  width: 100%;
}
</style>