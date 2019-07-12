<template>
  <div id="muluLiu">
    <div class="liuMuLu">
      <div class="hearde">
        <div>
          <router-link tag="i" class="iconfont icon-left-arrow" to="/xiangqingye"></router-link>
        </div>
        <div>
          <i>{{muLuList.zhangjielong}}</i>
        </div>
        <div>
          <router-link class="iconfont icon-xiazai45" tag="i" to="/liuHome"></router-link>
        </div>
      </div>
      <div class="navMuLu">
        <span>{{muLuList.page}}</span>
        <i class="iconfont icon-xiajiantou"></i>
        <a href="#" class="iconfont icon-dingdan"></a>
      </div>
      <div class="muLuBiao">
        <ul class="muLuList">
          <li v-for="(item,index) in muLuList.zhangjie" :key="index">
            <span>{{item.chapterName}}</span>
            <i>{{item.biaoti}}</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { muLu } from "api/mulu";
export default {
  name: "mulu",
  async created() {
    let data = await muLu();
    this.muLuList = data;
  },
  data() {
    return {
      muLuList: {}
    };
  }
};
</script>

<style>
.liuMuLu {
  width: 100%;
}

/*头部*/
.hearde {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.2rem;
  background: #f08300;
  display: flex;
  justify-content: space-between;
}
.hearde div {
  height: 0.88rem;
  color: #fff;
  line-height: 0.88rem;
}
.hearde div i {
  font-size: 0.44rem;
  font-weight: 200;
  font-style: normal;
}

/*章树选择*/
.navMuLu {
  width: 100%;
  padding: 0 0.32rem;
  height: 0.88rem;
  border-bottom: 0.01rem solid #000;
}
.navMuLu span {
  color: #333;
  float: left;
  font-size: 0.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.navMuLu i {
  color: #666;
  float: left;
  font-size: 0.4rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.navMuLu a {
  color: #999;
  float: right;
  font-size: 0.3rem;
  height: 0.88rem;
  line-height: 0.88rem;
}

/*目录列表*/
.muLuBiao {
  width: 100%;
  padding: 0 0.32rem;
}
.muLuBiao .muLuList {
  width: 100%;
}
.muLuList li {
  width: 100%;
  height: 0.88rem;
  font-size: 0.3rem;
  line-height: 0.88rem;
  border-bottom: 0.01rem solid #000;
}
.muLuList li i {
  margin-left: 0.15rem;
  font-style: normal;
}
</style>