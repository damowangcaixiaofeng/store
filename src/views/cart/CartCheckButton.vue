<template>
  <div class="item_check">
    <div class="check_box" :class="{checked:isChecked}"></div>
  </div>
</template>
<script>
export default {
  props: {
    isChecked:Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.item_check {
  width: 1.2rem;
}
.check_box {
  position: relative;
  top: calc(50% - 0.35rem);
  width: 0.7rem;
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.35rem;
  border: 0.04rem solid rgba(128, 128, 128, 0.4);
  background-color: white;
}
.check_box.checked {
  background: chocolate;
}
</style>