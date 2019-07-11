<template>
   <div class="headerContainer">
        <div class="iconfont  goback">&#xe767;</div>
        <div class="headerTitle">{{title}}</div>
        <div class="iconfont gohome">&#xe606;</div>
        </div>
</template>

 <script>
 export default {
   name:"headerCom",
   props:{
     title:{
       type:String,
       default:"排行"
     }
   }
 }
 </script>
 <style>
.headerContainer{
  width: 100%;
  display:flex;
    border-bottom: 1px solid #e17b00;
    background-color: #f08300;
    height: .88rem;
    line-height: .88rem;
    text-align: center;

}
.headerContainer .goback{
  font-size: .42rem;
  color: #fff;
  flex:1 1 auto;
}
.headerContainer .headerTitle{
color: #fff;
font-size: .32rem;
  flex:8 1 auto;
}
.headerContainer .gohome{
  font-size: .42rem;
  color: #fff;
  flex:1 1 auto;
}
.header-title{
  background: #f8f8f8;
  padding: .24rem .32rem;
  font-size: .28rem;
  line-height: .44rem;
  border-bottom: 1px solid #f3f3f3;
}
 </style>
