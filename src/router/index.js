import Vue from 'vue'
import Router from "vue-router"
Vue.use(Router);
import rankingList from "./rankingList";
import city from "./city";
import bookList from "./bookList";
import freebook from "./freebook";

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    rankingList,
    city,
    bookList,
    freebook
  ]
})
