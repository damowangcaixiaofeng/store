<template>
  <div>
    <navbar />
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item,index) in banners" :key="index">
        <div class="demo-carousel">
          <a :href="item.link">
            <img class="swipeimg" :src="item.image" />
          </a>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/navbar.vue";

import { getHomeMultiData } from "network/home.js";
export default {
  data() {
    return {
      value2: 0,
      banners: [],
      recommends: [],
    };
  },
  components: {
    Navbar,
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.swipeimg{
  height: 220px;
}
</style>