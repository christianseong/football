<template>
    <v-navigation-drawer
    app
    z-index="12"
    disable-resize-watcher
    v-model="Drawerbool"
    temporary
    right
    dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-card class="ma-0 pa-0" color="transparent" to="/"><v-img contain src="@/assets/logo_white_wid.png"></v-img></v-card>
            
          </v-list-item-title>
          <v-list-item-subtitle>
            <!--  -->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
      >
        <v-list-item
          v-for="item in Menulist"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="EngFont">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    Menulist(){
      return this.$store.state.Menulist;
    },
    Drawerbool:{
      get(){
        return this.$store.state.Drawerbool;
      },
      set(bool){
        return this.$store.commit('SetDrawer',bool);
      },
    },
},

}
</script>

<style scoped>
.EngFont{
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
}
</style>
