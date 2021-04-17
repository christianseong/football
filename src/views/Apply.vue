<template>
<v-container fluid class="mx-0 px-0">

<v-row>
  <v-col class="ma-0 pa-0" cols="12">
      <v-img max-height="700" data-aos="fade-left" src="https://images.wsj.net/im-105267?width=1280&size=1.33333333"></v-img>
  </v-col>

<v-container>
  <v-col cols="6">
    <v-card>
      ㅇㅅㅇ
    </v-card>
  </v-col>
</v-container>
</v-row>



<br v-for="i in 100" :key="i">
</v-container>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Apply');
    if(this.$vuetify.breakpoint.smAndDown===false)this.SetBoarderLine();
  },
   methods:{
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Apply'){
          document.getElementsByClassName('borderspan')[i].style.width = "0";
          document.getElementsByClassName('borderspan')[i].style.opacity = "0";
        }
        else{
          document.getElementsByClassName('borderspan')[i].style.width = "100%";
          document.getElementsByClassName('borderspan')[i].style.opacity = "1";
        } 
      }
    },
  },
    watch:{
    IsMobile(){
      if(this.IsMobile==true) return; 
      else this.SetBoarderLine();
    },
  },
  computed:{
    IsMobile(){
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style scoped>

</style>