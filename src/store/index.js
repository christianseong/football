import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headertext:"",
    menudraw:false,
  },
  mutations: {
    setheadertext(state,payload){
      state.headertext = payload;
    },
    setmenudraw(state,payload)
    {
      state.menudraw=payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
  }
})
