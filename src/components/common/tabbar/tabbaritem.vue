<template>
  <div class="tab-bar-item" @click="itemclick">
      <slot v-if="!isactive" name="itemimg"></slot>
      <slot v-else name="itemimga"></slot> 
      <div :style="activestyle"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path:String,
        activecolor:{
            type:String,
            default:'blue'
        }
    },
    computed: {
     isactive(){
      
          return  this.$route.path === this.path ? true : false;
        //return  this.$route.path.indexOf(this.path) !== -1
     },
     activestyle(){
         return this.isactive ? {color:this.activecolor}:{}
     }
    },methods:{
        itemclick(){
            this.$router.push(this.path);
             
        }
    }

}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
}

</style>