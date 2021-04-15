import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TestHover:false,
    Hover:false,
    Drawerbool:false,
    headertext:"",
    Menulist:[
      { title: 'About', icon: 'mdi-alpha-a', to:'/about'},
      { title: 'Business', icon: 'mdi-alpha-b', to:'/business'},
      { title: 'Contact', icon: 'mdi-alpha-c', to:'/contact'},
      { title: 'Notice', icon: 'mdi-alpha-n', to:'/notice'},
      { title: 'Apply', icon: 'mdi-alpha-a', to:'/apply'},
      ],
  },
  mutations: {
    SetTestHover(state,bool){
      state.TestHover = bool;
    },
    SetHover(state,bool){
      state.Hover=bool;
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
