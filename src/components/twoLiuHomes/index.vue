<template>
  <div>
    <div class="girlHot">
      <h3>男生热文</h3>
      <div class="girlTop">
        <ul class="girlTopList">
          <li v-for="(item,index) in twoListL.boy" :key="index">
            <img :src="item.book_img" />
            <p>{{item.bookname}}</p>
            <span>{{item.author_name}}</span>
          </li>         
        </ul>
      </div>
      <div class="girlBottom">
        <ul class="girlBottomList">
          <li v-for="(itemm,indexx) in twoListL.boyboy" :key="indexx">
            <h4>{{itemm.bookname}}</h4>
            <p>{{itemm.book_info}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="brbrbr"></div>
    <div class="girlHot">
      <h3>女生美女</h3>
      <div class="girlTop">
        <ul class="girlTopList">
          <li v-for="(ite,ind) in twoListL.girl" :key="ind">
            <img :src="ite.book_img" />
            <p>{{ite.bookname}}</p>
            <span>{{ite.author_name}}</span>
          </li>
        </ul>
      </div>
      <div class="girlBottom">
        <ul class="girlBottomList">
          <li v-for="(itemme,indexxe) in twoListL.girlgirl" :key="indexxe">
            <h4>{{itemme.bookname}}</h4>
            <p>{{itemme.book_info}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { twoLiuHome } from "api/liuHome";
export default {
  name: "twoLiuHomes",
  async created() {
    let data = await twoLiuHome();
    this.twoListL = data;
  },
  data() {
    return {
      twoListL: {}
    };
  }
};
</script>