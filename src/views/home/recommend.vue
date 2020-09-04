<template>
<div>
  <div class="recommend">
     <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
     </div>
  </div>

  </div>
</template>

<script>
export default {
    props: {
        recommends:{
            type:Array,
            default (){
                return []
            }
        }
        }

}
</script>

<style>

.recommend{
    margin-top: 10px;
    display: flex;
    text-align: center;
    border-bottom: 10px solid #eee;
}

.recommenditem{
    flex: 1;
    margin-bottom: 10px;

}
.recommenditem img{
    width: 68px;
    height:68px
}
</style>