<template>
  <div class="carbar">
    <div @click="clickall">
      <cart-check-button :isChecked="isall"></cart-check-button>
    </div>
    <div>
      <div>全选</div>
    </div>
    <div></div>
    <div></div>
    <div>应付:</div>
    <div>￥{{allprice}}</div>
    <div></div>
    <div>结算:</div>
    <div>{{checkedlength}}</div>
  </div>
</template>

<script>
import CartCheckButton from "views/cart/CartCheckButton.vue";
export default {
  components: {
    CartCheckButton,
  },
  computed: {
    allprice() {
      return this.$store.state.carList
        .filter((item) => {
          return item.checked;
        })
        .reduce((priceall, item) => {
          return item.count * item.price + priceall;
        }, 0)
        .toFixed(2);
    },
    checkedlength() {
      return this.$store.state.carList.filter((item) => item.checked).length;
    },
    isall() {
      if (this.$store.state.carList.length == 0) return false;
      return !this.$store.state.carList.filter((item) => !item.checked).length;
    },
  },
  methods: {
    clickall() {
      if (this.isall) {
        this.$store.state.carList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.carList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style>
.carbar {
  background-color: #b0b8b8;
  position: absolute;
  bottom: 49px;
  width: 100%;
  display: flex;
}
.carbar div {
  flex: 1;
  line-height: 40px;
  margin: auto;
  float: right;
}
</style>