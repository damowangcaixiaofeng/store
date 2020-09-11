<template>
  <div class="wrapper" ref="wrapper">
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {

     data () {
    return {
      scroll :null,
      
    }
  },props: {
    probetype:{
        type:Number,
        default:0
      },pullonload:{
        type:Boolean,
        default:true
      }
  },
  mounted () {
   
    this.scroll = new BScroll(this.$refs.wrapper, {
     click:true,
     probeType:this.probetype,
     pullUpLoad:this.pullonload//是否到底部加载
    });
   
     this.scroll.scrollTo(0,0)
 //监听滚动的位置
     this.scroll.on('scroll',(position)=>{
     this.$emit("scrollnum", position)
   
  })
//监听上拉
      if(this.pullonload){
         this.scroll.on('pullingUp',()=>{
         this.$emit('pullonload') 
      })
   }
    

  
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
  },
   refresh(){
    this.scroll && this.scroll.refresh()
  },getscrollY(){
    return this.scroll ?this.scroll.y :0
  }
  }
 
}
</script>

<style scoped>

</style>