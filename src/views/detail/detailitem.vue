<template>
  <nav-bar> 
      <div slot="navbarleft" class="back" @click="back">
          <img src="@/assets/img/back.png">
          </div>
      <div slot="navbarcenter" class="title">
            <div v-for="(item,index) in titles" :key="index" 
            class="titleitem" :class="{active:indexclick===index}"
            @click="click(index)">{{item}}</div>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue"
export default {
    data () {
        return {
            titles:['商品','参数','评论','推荐'],
            indexclick:0
        }
    },components: {
        NavBar
    },methods: {
        click(index){
            this.indexclick=index;
           this.$emit("detailitemclick",index)
        },back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
 .back img{
     margin-top: 15px;
     width: 20px;
 }
.title{
 display: flex;
 font-size: 12px;
}
.titleitem{
    flex: 1;
}
.active{
color:cadetblue;
}

</style>