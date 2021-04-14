<template>
    <v-app-bar
      app
      dark
      :height="Height"
      color="black"
    >
    <v-card
    width="100%"
    height="100%"
    class="d-flex black"
    >
    <v-row>
      <v-col cols="6">
        <router-link to="/">
        <v-img
        class="logoholder"
        contain
        width="200px"
        src="@/assets/logo_white_wider.png"
        >
        </v-img>
        </router-link>
      </v-col>
      <v-col cols="6">
        <HeaderText/>
      </v-col>
      <v-col cols="12" class="mb-2 pa-0 d-flex align-self-end">
        <HeaderToolBar />
      </v-col>
    </v-row>
    </v-card>
    <v-app-bar-nav-icon style="z-index:50;" absolute v-show=IsPhone @click="OpenDrawer"></v-app-bar-nav-icon>
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.0), rgba(255,255,255,.0)"
        ></v-img>
      </template>
    </v-app-bar>
</template>

<script>
import HeaderToolBar from '@/components/HeaderToolBar.vue'
import HeaderText from '@/components/HeaderText.vue'
export default {

components: {
  HeaderToolBar,
  HeaderText
},

data(){
  return{

  }
},
methods:{
  setwallpaper(src){
    this.$store.commit('SetTitleImg',src);
  },
  OpenDrawer(){
    this.$store.commit('SetDrawer',!this.$store.state.Drawerbool);
    console.log(this.$store.state.Drawerbool);
  },

},
computed:{
  IsPhone(){
    switch(this.$vuetify.breakpoint.name){
      case 'xs' :  return true;
      case 'sm' :  return true;
      case 'md' :  return false;
      case 'lg' :  return false;
      case 'xl' :  return false;
      default:  return false;
    }
    },
    Height(){
    switch(this.$vuetify.breakpoint.name){
      case 'xs' :  return 100;
      case 'sm' :  return 100;
      case 'md' :  return 200;
      case 'lg' :  return 200;
      case 'xl' :  return 200;
      default:  return false;
    }
    },

},
watch:{
      $route(to){
          switch(to.name){
            case "Main":
            this.setwallpaper("");
            break;

            case "About":
            this.setwallpaper("");
            break;

            case "Business":
            this.setwallpaper("");
            break;

            case "Service":
            this.setwallpaper("");
            break;
            case "Contact":
            this.setwallpaper("");
            break;

            default:
            this.setwallpaper("");
            break;
            }
        },
      },

} //

</script>

<style scoped>
.logoholder{
  top:90%;
  left:30%;
  z-index:10
}

@media (max-width:960px){
  .logoholder{
  top:50%;
  }
  @media (max-width:620px){
  .logoholder{
    left:60%;
  }
}
}
</style>
