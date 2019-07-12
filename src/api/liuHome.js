import http from "utils/http.js"

export const firstLiuHome = ()=>http("get","http://localhost:3000/first?q=first")

export const twoLiuHome = ()=>http("get","http://localhost:3000/two?q=two")

export const threeLiuHome = ()=>http("get","http://localhost:3000/three?q=three")

export const fourLiuHome = ()=>http("get","http://localhost:3000/four?q=four")

export const fiveLiuHome = ()=>http("get","http://localhost:3000/five?q=five")
