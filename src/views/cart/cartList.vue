<template>
  <div class="carlist">
    <cart-scroll class="content" ref="content">
       <cart-list-item v-for="(item,i) in cartList" :key="i" :item="item"></cart-list-item>
    </cart-scroll>
  </div>
</template>

<script>
import CartScroll from "components/common/scroll.vue";
import { mapGetters } from "vuex";
import CartListItem from "views/cart/CartListItem.vue"
export default {
  name: "cartList",
  components: {
    CartScroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"]),
    
  },activated () {
      this.$refs.content.refresh();
  }
};
</script>

<style>
.carlist{
 height:100vh;
 
}
.content{
   height: 100%;
   overflow: hidden;
   
}
</style>