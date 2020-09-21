<template>
  <div class="toast" v-show="show">
      {{message}}
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default:''
        },
        show:{
            type:Boolean,
            default:false
        }
    },methods: {
        showmessage(message,show){
            this.message=message;
         this.show=true;
        setTimeout(() => {
          this.message='';
          this.show=false;
        }, 1500);
        }
    }
}
</script>
<style>
.toast{
    position: fixed;
    left:50%;
    top: 50%;
    color: #fff;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 2px;
    transform: translate(-50%,-50%);
    z-index: 100;
}
</style>