import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Drawerbool:false,
    headertext:"",
    Menulist:[
      { title: 'All Ground', icon: 'mdi-cat', to:'/'},
      { title: 'About', icon: 'mdi-cat', to:'/about'},
      { title: 'Business', icon: 'mdi-cat', to:'/business'},
      { title: 'Service', icon: 'mdi-cat', to:'/service'},
      { title: 'Contact', icon: 'mdi-cat', to:'/contact'},
      { title: 'Apply', icon: 'mdi-cat', to:'/apply'},
      ],
    TitleImg:"",
    ScrollY:0,

  },
  mutations: {
    SetDrawer(state,bool){
      state.Drawerbool=bool;
    },
    SetHeaderText(state,payload){
      state.headertext = payload;
    },
    SetTitleImg(state,src){
      state.TitleImg = src;
    },
    SetScrollY(state,int){
      state.ScrollY=int;
    },
  },
  actions: {
  },
  modules: {
  }
})
