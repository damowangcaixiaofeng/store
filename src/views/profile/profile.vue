<template>
  <div id="profile">
     <div class="profile"></div>
      <img src="@/assets/img/2.jpg" class="pimg">
      <div class="pro_count">
        <div class="pro_count_item">
          <div>0</div>
          收藏的商铺
        </div>
        <div class="pro_count_item">
          <div>0</div>
          收藏的商品
        </div>
        <div class="pro_count_item">
          <div>0</div>
          关注的商品
        </div>
        <div class="pro_count_item">
          <div>0</div>
          我的足迹
        </div>
      </div>
      <div class="mdd">
        我的订单
      </div>
       <div class="pro_count">
        <div class="pro_count_item">
          <div>0</div>
          全部订单
        </div>
        <div class="pro_count_item">
          <div>0</div>
          待收货
        </div>
        <div class="pro_count_item">
          <div>0</div>
          待付款
        </div>
        <div class="pro_count_item">
          <div>0</div>
          退货/退款
        </div>
      </div>
      <div class="mdd">
        收货地址管理
      </div>
      <div class="mdd">
        联系客服 17321712371
      </div>
      <div class="mdd">
        意见反馈
      </div>
      <div class="mdd">
        关于我们
      </div>
      <div class="mdd">
        把应用推荐给他人
      </div>
  </div>
</template>

<script>

</script>

<style>
.mdd{
  background-color: white;
  width: 90%;
  margin: 0 auto 2px auto;
  font-size: 16px;
  padding: 5px;
}
 #profile{
   background-color: rgb(221, 216, 216);
   width: 100%;
   height: 100vh;
   
 }
.pro_count_item{
  flex: 1;
  text-align: center;
}
.pro_count{
  font-size: 16px;
  display: flex;
  width: 90%;
  background-color: rgb(255, 255, 255);
  margin: 2px  auto 10px auto;

}

 .profile{
  position: relative;;
  width: 100%;
  height: 280px;
  background: url('../../assets/img/2.jpg') no-repeat ; 
  background-size: cover;
  filter: blur(2px);
 }
.pimg{
  position: absolute;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  text-align: center; 
  margin-top:-50%;
  margin-left: calc((100% - 100px)/2);
}
</style>