<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
      
        <img slot="itemimg" src="@/assets/img/tabbar/shouye.png"/>
        <img slot="itemimga" src="@/assets/img/tabbar/shouye-a.png"/>
        <div slot="itemtext">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="itemimg" src="@/assets/img/tabbar/fenlei.png"/>
        <img slot="itemimga" src="@/assets/img/tabbar/fenlei-a.png"/>
        <div slot="itemtext">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="itemimg" src="@/assets/img/tabbar/gouwuche.png"/>
        <img slot="itemimga" src="@/assets/img/tabbar/gouwuche-a.png"/>
        <div slot="itemtext">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="itemimg" src="@/assets/img/tabbar/wode.png"/>
        <img slot="itemimga" src="@/assets/img/tabbar/wode-a.png"/>
        <div slot="itemtext">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import("components/common/tabbar/tabbar.vue");
const TabBarItem = () => import("components/common/tabbar/tabbaritem.vue");
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import url('assets/css/base.css');
@import url('assets/css/normalize.css');

</style>