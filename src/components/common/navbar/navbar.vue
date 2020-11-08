<template>
  <div class="navbar" :offset-top="50">
      <div class="navbarleft"><slot name="navbarleft"></slot></div>
      <div class="navbarcenter"><slot name="navbarcenter"></slot></div>
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
    box-shadow: 0 1px 1px rgba(133, 129, 129, 0.3);
}
.navbarleft .navbarright{
    width: 60px;
    line-height: 44px;
}
.navbarcenter{
    flex: 1;
}
</style>