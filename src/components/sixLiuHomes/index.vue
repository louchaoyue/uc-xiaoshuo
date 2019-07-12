<template>
  <div class="liuSex">
    <h3 class="liuSexh3">兴趣推荐</h3>
    <ul class="liuSexList">
      <li v-for="(item,index) in sixListL" :key="index">
        <img :src="item.book_img" />
        <div class="ssssssa">
          <h3>精选推荐</h3>
          <span>{{item.author_name}}</span>
          <p>{{item.book_info}}</p>
          <ul>
            <li v-for="(ite,ind) in sixListL[index].tag" :key="ind">{{ite}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fourLiuHome } from "api/liuHome";
export default {
    name: "sixLiuHomes",
    async created() {
      let data = await fourLiuHome();
      this.sixListL = data.renqi;
    },
    data() {
      return {
        sixListL: {}
      };
    }
};
</script>