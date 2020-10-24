<template>
  <div id="category_left">
    <div
      class="left_tab_item"
      v-for="(item, index) in list"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currIndex == index }"
    >
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
import { getCategory, getSubcategory} from "network/category.js";
export default {
  data() {
    return {
      currIndex: 0,
      currMaitKey: 0,
      list: null
    };
  },
  mounted() {
    //获取左边栏的信息
    getCategory().then((res)=>{
      this.list =res.data.data.category.list;

        getSubcategory(this.list[0].maitKey).then((res)=>{
                this.$store.state.storelist_item=res.data.data.list;
          }) 
    })
  },
  methods: {
  
    itemClick(index) {
      this.currIndex = index;
      if (this.list) {
        this.currMaitKey = this.list[index].maitKey;
        
        //获取右边信息
        getSubcategory(this.currMaitKey).then((res)=>{
          this.$store.state.storelist_item=res.data.data.list;
          
        })  
      }
    }
  }
};
</script>
<style scoped>
#category_left {
  position: relative;
  margin-top: 44px;
  width: 25%;
  background-color: #f6f6f6;
}
.left_tab_item {
  height: 3rem;
  line-height: 3rem;
}
.left_tab_item p {
  width: 100%;
  text-align: center;
  color: rgb(100, 100, 100);
  
}
.left_tab_item.active {
  background-color: white;
}
.left_tab_item.active p {
  color: var(--color-high-text);
  font-weight: 600;
  border-left: 0.2rem solid var(--color-high-text);
}
</style>