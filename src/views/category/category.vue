<template>

  <div id="category_nav">
     <navbar>
      <div slot="navbarcenter">
       分类
      </div>
    </navbar>
    <div class="main">
      <category-left ref="left" ></category-left>
      <category-right ref="right" :list_item="this.$store.state.storelist_item"></category-right>
    </div>
  </div>
</template>
<script>
import CategoryLeft from "views/category/CategoryLeft.vue";
import CategoryRight from "views/category/CategoryRight.vue";
import Navbar from "components/common/navbar/navbar.vue";
export default {
  
  components: {
    Navbar,
    CategoryLeft,
    CategoryRight
  },
  methods: {
    
  }
};
</script>
<style scoped>
.category_nav {
  background-color: var(--color-tint);
  color: white;
}
.main {
  display: flex;
  font-size: 0.6rem;
  height: calc(100vh - 2.09rem - 1.9rem);
}
</style>