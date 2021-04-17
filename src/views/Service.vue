<template>
<v-container fluid class="ma-0 pa-0">
<v-sheet :color="this.$store.state.HeaderColor">
  <v-carousel
  :show-arrows="false" 
  hide-delimiters
  cycle
  interval="700"
  height="fit-content"
   >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
    <v-img height="200" cover :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</v-sheet>

<v-container>
  <v-card>
    <p>ㅇㅅaㅇ</p>
  </v-card>
  <v-row>
    <v-col>
      <p>ㅇㅅㅇ</p>
    </v-col>
  </v-row>
</v-container>


<br v-for="i in 50" :key=i>
</v-container>
</template>

<script>
export default {
  data(){
    return{
       items: [
          {
            src: 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_960_720.jpg',
          },
          {
            src: 'http://v2.alldayfootball.net/img/banner/3138c195dc78141f46d31b82eef4adbc.jpg',
          },
          {
            src: 'http://v2.alldayfootball.net/img/banner/141123ae14fc8466325872bc3dad3e0d.jpg',
          },
        ],
    }
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Service');
    if(this.$vuetify.breakpoint.smAndDown===false)this.SetBoarderLine();
  },
   methods:{
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Service'){
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
p{
  white-space:pre;
}
</style>