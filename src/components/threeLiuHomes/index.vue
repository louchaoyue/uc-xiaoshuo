<template>
  <div class="finished">
    <h3>完结热推</h3>
    <div class="finishedList">
      <ul class="finishedListUl">
        <li v-for="(item,index) in threeListL.wanjie" :key="index">
          <img :src="item.book_img" />
          <p>{{item.bookname}}</p>
          <span>{{item.author_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { threeLiuHome } from "api/liuHome";
export default {
  name: "threeLiuHomes",
  async created() {
    let data = await threeLiuHome();
    this.threeListL = data;
  },
  data() {
    return {
      threeListL: {}
    };
  }
};
</script>