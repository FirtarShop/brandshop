<template>
  <div>
    <div class="purchasebackground"></div>
    <div class="purchase">
      <img src="@/assets/detial/01.jpg">
    </div>
    <div class="purchase">
      <a href>
        <img src="@/assets/detial/02.jpg">
      </a>
    </div>
    <div class="goumais">
      <div class="imgs">
        <img src="@/assets/1goodsku/1.jpg">
      </div>
      <div class="prices">
        <p class="gold">{{gold}}</p>
        <br>
        <span>{{span}}</span>

      </div>
      <router-link to="order">
        <div class="close">
            x
            </div>
      </router-link>
      <div class="colors">
        <p>颜色分类</p>
        <div class="white">白色</div>
        <div class="red">红色</diV>
        <div class="blue">蓝色</div>
        <div class="green">绿色</div>
      </div>
      <div class="numbers">
        <span>购买数量</span>
        <input class="text" type="text"/>
      </div>
      <router-link to='confirm'>
      <div class="confirmbutton">
        <input class="confirm" type="button" value="确定">
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Purchase",
  data() {
    return {
      gold: "￥50",
      text:"1",
      span:"欧标ISOFIX硬接口",
      button:"",
      text:"3",
      white:"",
      red:"",
      green:"",
      blue:"",
      imgs:"",
      close:"",
    };
  }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.purchasebackground{
  width: 100%;
  height: 800px;
  position: absolute;
  background-color: rgb(0, 0, 0,0.4)

}
.purchase {
  margin-top: -10px;
}
.purchase img {
  width: 100%;
}
.goumais {
  margin-top: -420px;
  height: 420px;
  width: 100%;
  background-color: white;
  position: absolute;
}

.imgs img{
  position: absolute;
  margin-left: 30px;
  margin-top: -15px;
  height: 130px;
  width: 130px;
}
.prices {
  float: left;
  margin-left: 190px;
  font-size: 16px;
}
.gold {
  font-size: 20px;
  color: red;
}
.close {
     position: absolute;
    width: 20px;
    height: 40px;
    font-size: 30px;
    color: darkgrey;
    margin-left: 90%;
}
.colors{
    margin: 20px;
    height: 120px;
    color: black;
    font-size: 14px;
    margin-top: 150px;
}
.blue{
       margin: 30px;
    height: 130px;
    color: black;
    font-size: 14px;
}
.white{
    width: 50%;
    margin-top: 10px;
    margin-left: 30px;
}
.red{
    width: 50%;
    float: right;
    margin-top: -20px;
}
.green{
     width: 50%;
    float: right;
    margin-top: -160px;
}
.numbers{
    height: 50px;
    color: black;
    font-size: 14px;
    margin-left: 20px;
}
.confirmbutton{
   margin-top: 30px;
  height: 50px;
  width: 100%;
}
.confirm{
    width: 100%;
    height: 50px;
    background-color: red;
    color: white;
    font-size: 25px;
    font-weight:bold;
}
.text{
    width: 35px;
    height: 20px;
    margin-left: 40%;
    margin-top: -50px;
}
</style>

