import http from "utils/http.js"

export const sousuoListOne = ()=>http("get","/abc/novel/i.php?do=is_payreco&id=8000000&qtf=shuqiApp&qtn=cpSearchReplace_sug&nums=8&shuqi_h5=&_=1562569368560")

export const sousuoListTwo = ()=>http("get","/abc/novel/i.php?do=is_pay_sugs&q=%E5%95%8A&_=1562569464436")