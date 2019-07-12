<template>
  <div id="xiangqQingYeLiu">
    <div class="liuXiang">
      <div class="headerLiu">
        <div>
          <i class="iconfont icon-left-arrow"></i>
        </div>
        <div>
          <i>{{xiangqingyeLiu.xiangqing_i1}}</i>
        </div>
        <div>
          <router-link class="iconfont icon-xiazai45" tag="i" to="/liuHome"></router-link>
        </div>
      </div>
      <div class="shuXiangQ">
        <div class="shuXiangQImg">
          <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
        </div>
        <div class="shuXiangQJieS">
          <h3>{{xiangqingyeLiu.xiangqing_h1}}</h3>
          <span>{{xiangqingyeLiu.xiangqing_span1}}</span>
          <p>{{xiangqingyeLiu.xiangqingye_p}}</p>
          <span>{{xiangqingyeLiu.xiangqingye_span2}}</span>
        </div>
      </div>
      <div class="Tags">
        <span>{{xiangqingyeLiu.xiangqingye_span3}}</span>
        <span>{{xiangqingyeLiu.xiangqingye_span4}}</span>
        <span class="TagsSpan">{{xiangqingyeLiu.xiangqingye_span5}}</span>
      </div>
      <div class="shuJieShao">
        <p>{{xiangqingyeLiu.xiangqingye_pp}}</p>
      </div>
      <router-link class="shuMuLu" tag="div" to="/mulu">
        <i class="iconfont icon-menu"></i>
        <a href="#">{{xiangqingyeLiu.xiangqing_a}}</a>
        <span>{{xiangqingyeLiu.xiangqingye_span6}}</span>
      </router-link>
      <div class="shuPingLun">
        <h3>{{xiangqingyeLiu.xiangqing_h3}}</h3>
        <ul>
          <li v-for="(item,index) in xiangqingyeLiu.pinglunList" :key="index">
            <i>{{item.pinglunList_i}}</i>
            <p>{{item.pinglunList_p}}</p>
          </li>
        </ul>
      </div>
      <div class="shuTuiJian">
        <h3>{{xiangqingyeLiu.xiangqingye_span2}}</h3>
        <ul class="shuTuiJianList">
          <li v-for="(ite,ind) in xiangqingyeLiu.xiangqingyeList" :key="ind">
            <img :src="ite.book_img" />
            <h4>{{ite.bookname}}</h4>
            <span>{{ite.author_name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {xiangQingYe} from "api/xiangqingye";
export default {
  name: "xiangqingye",
  async created() {
    let data = await xiangQingYe();
    this.xiangqingyeLiu = data;
  },
  data() {
    return {
      xiangqingyeLiu: {}
    };
  }
};
</script>

<style>
#xiangqQingYeLiu {
  width: 100%;
  height: 100%;
}
.liuXiang {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
/*头部*/
.headerLiu {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.2rem;
  background: #f08300;
  display: flex;
  justify-content: space-between;
}
.headerLiu div {
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
}
.headerLiu div i {
  font-size: 0.44rem;
  font-weight: 200;
  font-style: normal;
}

/* 书籍详情*/
.shuXiangQ {
  display: flex;
  width: 100%;
  padding: 0.32rem;
}
.shuXiangQImg img {
  width: 100%;
}
.shuXiangQJieS {
  margin-left: 0.4rem;
}
.shuXiangQJieS h3 {
  font-size: 0.44rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.3rem 0;
}
.shuXiangQJieS span {
  color: #999;
  font-size: 0.28rem;
  margin: 0.2rem 0;
}
.shuXiangQJieS p {
  color: #999;
  font-size: 0.28rem;
  margin: 0.2rem 0;
}

/*标签*/
.Tags {
  display: flex;
  width: 100%;
  padding: 0.32rem;
  justify-content: space-between;
}
.Tags span {
  color: #f08300;
  height: 0.88rem;
  line-height: 0.88rem;
  width: 2rem;
  text-align: center;
  border-radius: 0.1rem;
  border: 0.01rem solid #f08300;
}
.Tags .TagsSpan {
  color: #fff;
  background: #f08300;
}

/*书籍介绍*/
.shuJieShao {
  width: 100%;
  padding: 0.32rem;
}
.shuJieShao p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 0.4rem;
  font-size: 0.28rem;
}

/*书籍目录*/
.shuMuLu {
  width: 100%;
  padding: 0.32rem;
}
.shuMuLu i {
  font-size: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  color: #333;
}
.shuMuLu a {
  font-size: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  color: #333;
}
.shuMuLu span {
  font-size: 0.26rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.2rem;
  color: #999;
}

/*书籍评论*/
.shuPingLun {
  width: 100%;
  padding: 0.32rem;
}
.shuPingLun h3 {
  font-size: 0.36rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.1rem 0;
  border-bottom: 0.01rem solid #ccc;
}
.shuPingLun ul {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.shuPingLun ul li {
  width: 100%;
  border-bottom: 0.01rem solid #ccc;
}
.shuPingLun ul li i {
  color: #999;
  font-size: 0.24rem;
}
.shuPingLun ul li p {
  margin-top: 0.1rem;
  padding-left: 0.2rem;
  color: #333;
  line-height: 0.38rem;
}

/*推荐小说*/
.shuTuiJian {
  width: 100%;
  padding: 0.32rem;
}
.shuTuiJian h3 {
  font-size: 0.36rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.1rem 0;
  font-weight: 100;
}
.shuTuiJian .shuTuiJianList {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.shuTuiJianList li {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding-right: 0.2rem;
  margin: 0.2rem 0;
}
.shuTuiJianList li img {
  width: 100%;
}
.shuTuiJianList li h4 {
  color: #333;
  font-size: 0.24rem;
}
.shuTuiJianList li span {
  color: #999;
  font-size: 0.24rem;
}
</style>