import http from "utils/http.js"

export const tuiJian = ()=>http("get","http://localhost:3000/tuijian?q=tuijian")