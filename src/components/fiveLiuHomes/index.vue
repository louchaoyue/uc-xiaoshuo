<template>
  <div class="boots">
    <h3>精选书单</h3>
    <ul class="bootsList">
      <li v-for="(item,index) in fiveListL" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.sdesc}}</p>
        <div class="bootssps">
          <span v-for="(itn,ind) in fiveListL[index].tags" :key="ind">{{itn}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fiveLiuHome } from "api/liuHome";
export default {
  name: "fiveLiuHomes",
  async created() {
    let data = await fiveLiuHome();
    this.fiveListL = data.jingxuanshudan;
  },
  data() {
    return {
      fiveListL: {}
    };
  }
};
</script>