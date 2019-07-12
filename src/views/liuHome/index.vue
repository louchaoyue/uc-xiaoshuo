<template>
  <div id="liuHome">
    <HeadeLiuHomes />
    <div class="contects">
      <FirstLiuHomes />
      <TwoLiuHomes />
      <ThreeLiuHomes/>
      <FourLiuHomes />
      <FiveLiuHomes />
      <SixLiuHomes />
    </div>
  </div>
</template>



<script>
import FirstLiuHomes from "components/firstLiuHomes";
import HeadeLiuHomes from "components/headeLiuHomes";
import TwoLiuHomes from "components/twoLiuHomes";
import ThreeLiuHomes from "components/threeLiuHomes";
import FourLiuHomes from "components/fourLiuHomes";
import FiveLiuHomes from "components/fiveLiuHomes";
import SixLiuHomes from "components/sixLiuHomes";
export default {
  name: "home",
  components: {
    FirstLiuHomes,
    TwoLiuHomes,
    HeadeLiuHomes,
    ThreeLiuHomes,
    FourLiuHomes,
    FiveLiuHomes,
    SixLiuHomes
  }
}
</script>

<style>
/*头部css*/
#shouyeHaeder {
  height: 0.88rem;
  background-color: #f08300;
  border-bottom: 0.01rem solid #e17b00;
}

.logo {
  display: inline-block;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}

.logoImg {
  display: inline-block;
  height: 0.44rem;
}

.items {
  float: right;
  font-size: 0;
}

.items li {
  display: inline-block;
  margin-top: 0.2rem;
  margin-right: 0.32rem;
  width: 0.48rem;
  height: 0.48rem;
}

.items li img {
  width: 0.48rem;
  height: 0.48rem;
}

/*banner图 css*/
.swiper-container {
  height: 100%;
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
/* .banner{
    position: relative;
}
.bannerList{
    overflow: hidden;
    position: relative;
    width: 37.5rem;
    height: 1.75rem;
    transition-duration: 500ms;
}
.bannerList li{
    float: left;
    width: 7.5rem;
    height: 1.75rem;
    vertical-align: top;
}
.bannerList .bannerShow{
    display: block;
}
.bannerList li img{
    width: 7.5rem;
    height: 1.75rem;
    padding: .15rem;
    box-sizing: border-box;
    border-radius: .01rem;
} */
.navLie {
  padding: 0.3rem 0 0.24rem;
  width: 100%;
}
.navList {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.navList li {
  text-align: center;
  width: 0.88rem;
  overflow: hidden;
}
.navList li span {
  display: inline-block;
  width: 0.88rem;
  height: 0.88rem;
  background: url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")
    no-repeat;
}
.navList li:nth-child(2) span {
  background-position: 0 -0.88rem;
}
.navList li:nth-child(3) span {
  background-position: 0 -1.76rem;
}
.navList li:nth-child(4) span {
  background-position: 0 -2.64rem;
}
.navList li:nth-child(5) span {
  background-position: 0 -3.52rem;
}

/*精品推荐*/
.recommendation {
  width: 100%;
}
.recommendation h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.recommendationList {
  width: 100%;
}
.recommendationListUl {
  text-align: center;
  overflow: hidden;
  width: 100%;
  padding: 0.32rem 0 0.32rem 0.32rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.recommendationListUl li {
  width: 25%;
  display: inline-block;
  padding-right: 0.32rem;
  box-sizing: border-box;
  margin-bottom: 0.32rem;
}
.recommendationListUl li img {
  width: 100%;
}
.recommendationListUl li p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommendationListUl li span {
  color: #999;
}

/*男生热文*/

.boyHot {
  width: 100%;
}
.boyHot h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.boyTop {
  width: 100%;
  padding: 0.32rem;
  padding-right: 0;
}
.boyTopList {
  width: 100%;
  display: flex;
}
.boyTopList li {
  width: 25%;
  padding-right: 0.32rem;
  box-sizing: border-box;
}
.boyTopList li img {
  width: 100%;
}
.boyTopList li p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.boyTopList li span {
  color: #999;
}
.boyBottom {
  width: 100%;
}
.boyBottomList {
  width: 100%;
  padding: 0.32rem;
  padding-right: 0;
}
.boyBottomList li {
  width: 100%;
  padding: 0.1rem 0;
  border-top: 0.01rem solid #ccc;
}
.boyBottomList li h4 {
  height: 0.7rem;
  line-height: 0.7rem;
  color: #333;
}
.boyBottomList li p {
  padding-right: 0.2rem;
  color: #999;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brbrbr {
  width: 100%;
  height: 0.16rem;
  background: #f0f0f2;
}

/*女生美文*/
.girlHot {
  width: 100%;
}
.girlHot h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.girlTop {
  width: 100%;
  padding: 0.32rem;
  padding-right: 0;
}
.girlTopList {
  width: 100%;
  display: flex;
}
.girlTopList li {
  width: 25%;
  padding-right: 0.32rem;
  box-sizing: border-box;
}
.girlTopList li img {
  width: 100%;
}
.girlTopList li p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.girlTopList li span {
  color: #999;
}
.girlBottom {
  width: 100%;
}
.girlBottomList {
  width: 100%;
  padding: 0.32rem;
  padding-right: 0;
}
.girlBottomList li {
  width: 100%;
  padding: 0.1rem 0;
  border-top: 0.01rem solid #ccc;
}
.girlBottomList li h4 {
  height: 0.7rem;
  line-height: 0.7rem;
  color: #333;
}
.girlBottomList li p {
  padding-right: 0.2rem;
  color: #999;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*完结热推*/
.finished {
  width: 100%;
}
.finished h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.finishedList {
  width: 100%;
}
.finishedListUl {
  text-align: center;
  overflow: hidden;
  width: 100%;
  padding: 0.32rem 0 0.32rem 0.32rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.finishedListUl li {
  width: 25%;
  display: inline-block;
  padding-right: 0.32rem;
  box-sizing: border-box;
  margin-bottom: 0.32rem;
}
.finishedListUl li img {
  width: 100%;
}
.finishedListUl li p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.finishedListUl li span {
  color: #999;
}

/*人气榜*/
.popularity {
  width: 100%;
}
.popularity h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.popularityList,
.popppp {
  width: 100%;
  padding: 0.32rem;
}
.popppp {
  width: 100%;
  display: block;
  height: 2.8rem;
}
.popppp img {
  display: block;
  float: left;
  padding: 0.1rem;
  width: 2rem;
}
.popppp .popularityShowR {
  float: left;
  width: 4.6rem;
  margin-left: 0.26rem;
}
.popppp .popularityShowR h3 {
  color: #333;
  font-size: 0.3rem;
}
.popppp .popularityShowR span {
  color: #999;
  margin: 0.3rem 0;
}
.popppp .popularityShowR p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0.3rem 0;
  color: #999;
}
.popularityShowR ul {
  display: flex;
  margin-top: 0.66rem;
}
.popularityShowR > ul > li {
  margin-right: 0.2rem;
}
.popularityList > li {
  width: 100%;
  display: block;
  height: 0.4rem;
  margin: 0.2rem 0;
}
.popularityList > li > b {
  float: left;
  font-size: 0.3rem;
}
.popularityList > li > span {
  border: 0.01rem solid blue;
  color: blue;
  float: right;
  margin-right: 0.2rem;
}
.popularityList > li > i {
  border: 0.01rem solid #ccc;
  color: #ccc;
  float: right;
  margin-right: 0.2rem;
}

/*精选书单*/
.boots {
  width: 100%;
}
.boots h3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.boots .bootsList {
  width: 100%;
  padding: 0.32rem;
}
.bootsList li {
  overflow: hidden;
}
.bootsList li h3 {
  padding: 0;
  margin: 0.1rem 0;
}
.bootsList li p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0.3rem 0;
  color: #999;
}
.bootssps {
  display: flex;
  width: 100%;
}
.bootssps span {
  border: 0.01rem solid #999;
  margin-right: 0.2rem;
}

/*兴趣推荐*/
.liuSex {
  padding: 0.32rem;
  width: 100%;
}
.liuSex .liuSexh3 {
  width: 100%;
  height: 0.32rem;
  font-size: 0.28rem;
  line-height: 0.32rem;
  padding-left: 0.32rem;
  color: #333;
}
.liuSexList {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 2.8rem;
}
.liuSexList li img {
  display: block;
  float: left;
  padding: 0.1rem;
  width: 2rem;
}
.liuSexList .ssssssa {
  float: left;
  width: 4.6rem;
  margin-left: 0.26rem;
}
.liuSexList .ssssssa h3 {
  color: #333;
  font-size: 0.3rem;
}
.liuSexList .ssssssa span {
  color: #999;
  margin: 0.3rem 0;
}
.liuSexList .ssssssa p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 0.3rem 0;
  color: #999;
}
.ssssssa ul {
  display: flex;
  justify-content: space-around;
}
.ssssssa ul li {
  border: 0.01rem solid #999;
}
.ssssssa ul li:nth-child(1) {
  color: blue;
  border: 0.01rem solid blue;
}
.ssssssa ul li:nth-child(2) {
  color: red;
  border: 0.01rem solid red;
}
.ssssssa ul li:nth-child(3) {
  color: yellowgreen;
  border: 0.01rem solid yellowgreen;
}
</style>