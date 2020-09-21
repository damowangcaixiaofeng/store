import Vue from 'vue'
import Vuex from 'vuex'
import getters from 'store/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    carList:[],
    
  },
  mutations: {
   addCount(state,paylode){
    paylode.count++
    
   },
   addToCar(state,paylode){
    paylode.checked=true;
    state.carList.push(paylode)
    
   }
  },
  actions: {
    addProduct(context,paylode){
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.carList.find(item => item.iid===paylode.iid )
      if(oldProduct){
        context.commit("addCount",oldProduct)
        resolve('当前商品数量加1')  
      }else{
        paylode.count=1;
        context.commit("addToCar",paylode)
        resolve('添加了新的商品')
      }
      })
    }
  },
  modules: {
  }
})
