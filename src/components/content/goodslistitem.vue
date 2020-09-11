<template>
  <div class="listitem"  @click="itemClick">
       <img :src="showImage" alt="" @load="imgload" >
       <div class="listp">
           <P>{{listitem.title}}</P>
           <span>{{listitem.price}} </span>
           <span> {{listitem.cfav}}</span>
       </div>   
  </div>
</template>

<script>

export default {
     props: {
        listitem:{
            type:Object,
            default(){
                return {}
            }
        }
    } ,methods: {
        imgload(){
            this.$bus.$emit('imgloaded')
        },
      
        itemClick(){
            this.$router.push('/detail/'+this.listitem.iid)
    }
    },computed: {
        showImage(){
             if(this.listitem.show !== undefined){
                  return  this.listitem.show.img
             }else{
                  return  this.listitem.image
             }
        }
    }
    
}
</script>

<style>
 .listitem{
     width: 48%;
     
 }
 .listitem img{
     width: 100%; 
     border-radius: 5px;
 }
 .listp p{
     
     overflow: hidden; 
     left: 0;
     right: 0;
 }
</style>