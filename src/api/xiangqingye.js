import http from "utils/http.js"

export const xiangQingYe = ()=>http("get","http://localhost:3000/xiangqingye?q=xiangqingye")