<template>
  <div class="w" ref="a">
      <ul class="">
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
        <li>&</li>
      </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  data () {
    return {
      scroll:null
    }
  },mounted () {
    const scroll = new BScroll(this.$refs.a,{
      probeType:3,
      pullUpLoad:true
    })
  }

}
</script>

<style scoped>
.w{
  width: 100%;
  height: 200px;
  background-color: red;
}
</style>>
