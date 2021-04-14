<template>
<v-tabs
v-if="!IsPhone"
background-color="transparent"
show-arrows
height="50"
width="100%"
class="d-flex align-end justify-space-around align-self-end"
>
  <v-tab
  v-for="i in Menulist" :Key="i.title"
  :to="i.to"
  class="px-16"
  ><p class="title">{{i.title}}</p>
  </v-tab>

</v-tabs>
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
  height(){
    switch(this.$vuetify.breakpoint.name){
      case 'xs': return 500;
      default: return 500;
    }
  },
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
},
}
</script>

<style scoped>
</style>
