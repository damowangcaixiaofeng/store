<template>
  <div class="wrapper" ref="wrapper">
    <div class="content1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
    pullonload: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probetype,
      pullUpLoad: this.pullonload, //到底上拉加载
    }); 
    //监听滚动位置，修改backtop状态
    this.scroll.on('scroll',(position)=>{
        this.$emit('emitbacktop',position)
    })
    //上拉加载
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullonload')
    })
  },
  methods: {
     refresh(){
    this.scroll && this.scroll.refresh()
  },
  }
};
</script>

<style scoped>

</style>