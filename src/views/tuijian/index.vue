<template>
  <div id="liuTuijian">
    <div class="wocao">
      <div class="synopsis">
        <img
          src="https://image.uc.cn/s/uae/g/3o/broccoli/resource/201907/15dd5170-9f1b-11e9-b197-9d42fcb6fb71.png"
        />
        <p>{{tuijianLiu.title_p1}}</p>
        <p>{{tuijianLiu.title_p2}}</p>
      </div>
      <div class="details">
        <div class="detailsTop">
          <div class="detailsLeft">
            <img src="http://img-tailor.11222.cn/bcv/big/1123617460830.jpg" />
          </div>
          <div class="detailsCent">
            <h3>{{tuijianLiu.tuijian_h3}}</h3>
            <p>{{tuijianLiu.tuijian_p}}</p>
            <span>{{tuijianLiu.tuijian_span2}}</span>
            <span>{{tuijianLiu.tuijian_span1}}</span>
          </div>
          <div class="detailsRight">
            <router-link tag="span" to="/xiangqingye">{{tuijianLiu.tuijian_span3}}</router-link>
          </div>
        </div>
        <div class="detailsBottom">
          <p>{{tuijianLiu.tuijian_p1}}</p>
        </div>
      </div>
      <div class="chsngas">
        <h3>更多推荐</h3>
        <div class="chsngasList">
          <div class="chsngasListone" v-for="(item,index) in tuijianLiu.tuijianList" :key="index">
            <img :src="item.book_img" />
            <h4>{{item.bookname}}</h4>
            <p>{{item.author_name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { tuiJian } from "api/tuijian";
export default {
  name: "tuijian",
  async created() {
    let data = await tuiJian();
    this.tuijianLiu = data;
  },
  data() {
    return {
      tuijianLiu: {}
    };
  }
};
</script>

<style>
#liuTuijian {
  width: 100%;
}
.wocao {
  display: flex;
  flex-direction: column;
}

/*小说简介*/
.synopsis {
  width: 100%;
  height: 4rem;
}
.synopsis img {
  width: 100%;
}
.synopsis p {
  margin: 0.23rem 0;
  padding: 0 0.32rem;
  box-sizing: border-box;
  color: #333;
  font-size: 0.25rem;
}

/* 小说详情*/
.details {
  margin: 0.25rem 0.15rem;
  padding: 0 0.15rem;
  width: 7.2rem;
  height: 5.98rem;
  border: 0.01rem solid #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.detailsTop {
  padding: 0.25rem;
  width: 100%;
  height: 2.5rem;
  display: flex;
  border-bottom: 0.01rem solid #eee;
}
.detailsTop .detailsLeft {
  width: 33%;
  height: 100%;
}
.detailsTop .detailsLeft img {
  height: 100%;
}
.detailsTop .detailsCent {
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.detailsTop .detailsCent h3 {
  color: blue;
}
.detailsTop .detailsCent p {
  color: #999;
}
.detailsTop .detailsCent span {
  color: rgb(5, 5, 87);
}
.detailsTop .detailsRight {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detailsTop .detailsRight span {
  color: #fff;
  background: blue;
  width: 100%;
  height: 0.68rem;
  line-height: 0.68rem;
  border-radius: 0.34rem;
  text-align: center;
}
.details .detailsBottom {
  width: 100%;
  height: 2.48rem;
}
.details .detailsBottom p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  line-height: 0.5rem;
}

/*更多推荐*/
.chsngas {
  display: flex;
  flex-direction: column;
}
.chsngas h3 {
  height: 0.5rem;
  color: #333;
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  font-weight: 300;
  line-height: 0.5rem;
}
.chsngas .chsngasList {
  display: flex;
  overflow: hidden;
  padding: 0.32rem;
  justify-content: space-between;
}
.chsngasList .chsngasListone {
  display: flex;
  flex-direction: column;
}
.chsngasListone h4 {
  height: 0.3rem;
  line-height: 0.3rem;
  margin: 0.1rem 0;
}
</style>