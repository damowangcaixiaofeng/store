/* 精品，流行，新款的组件 */
<template>
  <div class="homecontrol">
      <div v-for="(item,index) in controlitem" :key="index" class="controlitem">
              <span :class="{activespan:index===fastindext}" @click="itemclick(index)">
                                  {{item}}
              </span>
      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            fastindext:0
        }
    },
    props: {
        controlitem:{
            type:Array,
            default(){
                return []
            }
        }
    } ,
    methods: {
        itemclick(index){
            this.fastindext=index;
            this.$emit('giclick', index)
            
        }
    }
}
</script>

<style>
.homecontrol{
    display: flex;
    padding-top: 10px;
    background-color: #ffffff;
    border-top: 10px solid #eee;
}
.controlitem{
    flex: 1;
    text-align: center;
    font-size: 1.5em;
    color: #9B9C9E;
}
.activespan{
    border-bottom: #DFAEA1 solid 3px;
}
</style>