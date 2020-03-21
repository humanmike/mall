import {reqeust} from "./request";


// 获取导航栏数据
export function getHomeMultidata() {
  return reqeust({
    url: '/home/multidata'
  })
}

// 获取首页货品数据
export function getHomeGoods(type, page) {
  return reqeust({
    url: '/home/data',
    params:{
      type, page
    }
  })
}
