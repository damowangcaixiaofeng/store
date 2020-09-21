import Toast from "components/common/Toast.vue"

const obj={
}

obj.install = function(Vue){
    //创建构造器
    const tst =  Vue.extend(Toast)
    //用new ,根据构造器，创建组件对象
    const toast = new  tst()
    //将组件对象挂在div上
    toast.$mount(document.createElement('div'))
    //将div挂在到原型上的body里
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast;
}
export default obj