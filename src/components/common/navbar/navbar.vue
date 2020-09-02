<template>
  <div class="navbar">
      <div class="navbarleft"><slot name="navbarleft"></slot></div>
      <div class="navbarcenter"><slot name="navbarcenter"><strong>商品栏</strong></slot></div>
      <div class="navbarright"><slot name="navbarright"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 0px rgba(24, 26, 26, 0.3);
}
.navbarleft,.navbarright{
    width: 60px;
    line-height: 44px;
}
.navbarcenter{
    flex: 1;
}
</style>