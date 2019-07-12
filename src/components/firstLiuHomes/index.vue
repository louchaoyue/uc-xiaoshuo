<template>
  <div>
    <div class="swiper-container">
      <router-link class="swiper-wrapper" tag="div" to="/tuijian">
        <div class="swiper-slide" v-for="(item,index) in firstListL.banner" :key="index">
          <img :src="item.image_url"/>
        </div>
      </router-link>
      <div class="swiper-pagination"></div>
    </div>
    <div class="navLie">
      <ul class="navList">
        <li v-for="(ite,ind) in firstListL.navs" :key="ind">
          <span></span>
          <h3>{{ite}}</h3>
        </li>
      </ul>
    </div>
    <div class="recommendation">
      <h3>精品推荐</h3>
      <div class="recommendationList">
        <ul class="recommendationListUl">
          <li  v-for="(iliu,idong) in firstListL.jingpin" :key="idong">
            <img :src="iliu.book_img" />
            <p>{{iliu.bookname}}</p>
            <span>{{iliu.author_name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import {firstLiuHome} from "api/liuHome"
export default {
    name:"firstLiuHomes",
      async created() {
        let data = await firstLiuHome()
        this.firstListL = data;
    },
    data(){
      return{
        firstListL:{}
      }
    }
};
</script>