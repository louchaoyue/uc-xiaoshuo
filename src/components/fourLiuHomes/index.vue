<template>
  <div class="popularity" v-if="fourListL.renqi">
    <h3>人气榜</h3>
    <div class="popppp">
      <img :src="fourListL.renqi[0].book_img" />
      <div class="popularityShowR">
        <h3>重生罢了:西交印花税</h3>
        <span>{{fourListL.renqi[0].author_name}}</span>
        <p>{{fourListL.renqi[0].book_info}}</p>
        <ul>
          <li v-for="(ite,ind) in fourListL.renqi[2].tag" :key="ind">{{ite}}</li>
        </ul>
      </div>
    </div>
    <ul class="popularityList">
      <li v-for="(item,index) in fourListL.renqi" :key="index">
        <b>{{item.bookname}}</b>
        <span>{{item.tag[0]}}</span>
        <i>{{item.tag[2]}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
import { fourLiuHome } from "api/liuHome";
export default {
  name: "fourLiuHomes",
  async created() {
    let data = await fourLiuHome();
    this.fourListL = data;
  },
  data() {
    return {
      fourListL: {}
    };
  }
};
</script>