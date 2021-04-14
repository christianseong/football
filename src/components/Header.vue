<template>
    <v-app-bar
      app
      dark
      scroll-threshold="1"
      :height="Height"
      color="black"
      :src="this.$store.state.TitleImg"
      class="overflow-hidden"
      id="appbar"
    >
    <HeaderText/>
    <v-app-bar-nav-icon style="z-index:50;" absolute v-show=IsPhone @click="OpenDrawer"></v-app-bar-nav-icon>
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.0), rgba(255,255,255,.0)"
        ></v-img>
      </template>
    <HeaderToolBar />
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
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;

            case "About":
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;

            case "Business":
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;

            case "Service":
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;
            case "Contact":
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;

            default:
            this.setwallpaper("https://i.ibb.co/zZJGWNx/title4.png");
            break;
            }
        },
      },

} //

</script>

<style scoped>
#appbar{
}
</style>
