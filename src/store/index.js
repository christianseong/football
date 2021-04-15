import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TestHover:false,
    Drawerbool:false,
    headertext:"",
    Menulist:[
      { title: 'About', icon: 'mdi-cat', to:'/about'},
      { title: 'Business', icon: 'mdi-cat', to:'/business'},
      { title: 'Contact', icon: 'mdi-cat', to:'/contact'},
      { title: 'Notice', icon: 'mdi-cat', to:'/notice'},
      { title: 'Apply', icon: 'mdi-cat', to:'/apply'},
      ],
  },
  mutations: {
    SetTestHover(state,bool){
      state.TestHover = bool;
    },
    SetDrawer(state,bool){
      state.Drawerbool=bool;
    },
    SetHeaderText(state,payload){
      state.headertext = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
