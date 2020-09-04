<template>
  <div class="goods">
      <goods-listitem v-for="(item,index) in goods"  :key="index" :listitem='item'>  
      </goods-listitem>
       
  </div>
</template>

<script>
import GoodsListitem from './goodslistitem'
export default {
    props: {
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },components: {
        GoodsListitem
    }
}
 
</script>

<style>
.goods{
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>