import {request} from 'network/request.js'


export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGoods(type,page){
    return request({
        url:"/home/data?type="+type+"&page="+page,
        props: {
            type,
            page
        }
    })
}
 