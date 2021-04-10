<template>
  <v-app>
    <v-app-bar
      app
      height="0px"
    >
     </v-app-bar>
     <v-navigation-drawer
     app
     v-model=menudraw
     disable-resize-watcher
     dark
     >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title align="center" class="title">
            <div class="Titleholder"><router-link class="title_name" to="/"><div class="logo"></div>ALL GROUND</router-link></div>
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Header/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
     items: [
          { title: 'About', icon: 'mdi-cat',to:'/about' },
          { title: 'Business', icon: 'mdi-cat',to:'/business' },
          { title: 'Service', icon: 'mdi-cat', to:'/service'},
          { title: 'Contact', icon: 'mdi-cat', to:'/contact'},
          { title: 'Apply', icon: 'mdi-cat', to:'/Apply'},
        ],
  }),
  computed:{
    menudraw:{
      get(){
        return this.$store.state.menudraw;
      },
      set(bool){
        return this.$store.commit('setmenudraw',bool);
      }
    }
  },
};
</script>

<style>
#app{
  background-color:black;
}
.v-toolbar__content {
  padding: 0px!important;
}
.logo{
  position: relative;
  justify-self: center;
  background-image:url('./assets/logo.png');
  background-position:center;
  background-size:contain;
  width:50px;
  height:50px;
}
.titlehoder{
  display:flex;
  
}
.Titleholder a{
  color: white;
}
</style>