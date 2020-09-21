<template>
  <div class="cart">
    <nav-bar>
      <div slot="navbarcenter">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bar></cart-bar>
  </div>
</template>

<script>
import CartBar from "views/cart/cartbar.vue"
import NavBar from "components/common/navbar/navbar.vue";
import {mapGetters} from "vuex"
import CartList from "views/cart/cartList.vue"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartBar,
    CartList
  },computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>

<style>
 
</style>