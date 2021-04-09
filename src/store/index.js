import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headertext:"",
    mobiletabactive:false,
  },
  mutations: {
    setheadertext(state,payload){
      state.headertext = payload;
    },
    mobiletabact(state,payload)
    {
      state.mobiletabactive=payload;
      console.log(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
