<template>
  <div class="navbar" :offset-top="50">
      <div class="navbarleft"><slot name="navbarleft"></slot></div>
      <div class="navbarcenter"><slot name="navbarcenter"><strong>商品</strong></slot></div>
      <div class="navbarright"><slot name="navbarright"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    width: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 2;
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 2px 3px rgba(197, 92, 92, 0.3);
}
.navbarleft .navbarright{
    width: 60px;
    line-height: 44px;
}
.navbarcenter{
    flex: 1;
}
</style>