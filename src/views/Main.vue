<template>
<div>
<v-card data-aos="zoom-in" elevation="0"  class="overflow-y-auto" >
      <v-img max-height="800" src="https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2019/05/27/Amsterdam-1928-football/2019-05-27-Amsterdam-1928-football-featured.jpg"></v-img>
      <p style="position:absolute; z-index:1;" class="MainText textholderani">FALL SEVEN TIMES</p>
      <p style="position:absolute; z-index:2;" class="MainText2 textholderani2">STAND UP EIGHT.</p>
</v-card>

<v-container style="overflow:hidden;" class="mt-16">

  <v-card data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-anchor-placement="top-center" 
          elevation="5"  class="my-16 pa-10 rounded-xl blue-grey lighten-4">
    <v-row>
      <v-col cols="12">
        <h1 class="Font">올그라운드는???????</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card height="40vh"  elevation="5">

        </v-card>
      </v-col>
    </v-row>
  </v-card>

  <v-card data-aos="zoom-in-up" elevation="5" class="pa-10 rounded-xl blue-grey lighten-4">
    <v-row>
      <v-col cols="12" >
        <h1 class="Font">123<br> 치킨은 가마치<br></h1>
      </v-col>
    </v-row>
  </v-card>

</v-container>
</div>
</template>

<script>
export default {
components: {
  },
  data(){
    return{
    }
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','ALL GROUND');
    if(this.$vuetify.breakpoint.smAndDown===false)this.SetBoarderLine();
  },
  methods:{
    // anireset(id,aniclass){
    //   const element = document.getElementById(id);
    //   element.classList.remove(aniclass);
    //   void element.offsetWidth;
    //   element.classList.add(aniclass);
    // },
    // onIntersect(){
    //   this.anireset('ani1','cardani');
    // },
    // onIntersect2(){
    //   this.anireset('ani2','cardani2');
    // },
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Main'){
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
.Font{
  font-family: 'Do Hyeon', sans-serif;
}
.MainText{
    left:15%;
    top:20%;
    font-family: 'Do Hyeon', sans-serif;
    color:white;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: -.125rem;
    font-weight: 700;
    white-space:pre;
}
.MainText::selection{
  background-color:chartreuse;
}
.textholderani{
    animation-name:headerani;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
@keyframes headerani {
  0% {
    left:15%;
    opacity:0;
  }
  100% {
    left:45%;
    opacity:0.9;
  }
}
.MainText2{
    left:80%;
    top:30%;
    font-family: 'Do Hyeon', sans-serif;
    color:white;
    font-size: 6rem;
    line-height: 4rem;
    letter-spacing: -.125rem;
    font-weight: 700;
    white-space:pre;
}
.MainText2::selection{
  background-color:green;
}
.textholderani2{
    animation-name:headerani2;
    animation-duration:4s;
    animation-fill-mode: forwards;
}
@keyframes headerani2 {
  0% {
    left:80%;
    opacity:0;
  }
  100% {
    left:40%;
    opacity:0.7572;
  }
}
@media (max-width:1400px){
  .MainText, .MainText2{
    font-size: 3rem;
    line-height: 3.63333333rem;
    letter-spacing: -.104rem;
    font-weight: 700;
    overflow: hidden;
  }
}
@media (max-width:800px){
  .MainText, .MainText2{
    font-size: 2.5rem;
    line-height: 3.63333333rem;
    letter-spacing: -.104rem;
    font-weight: 700;
    overflow: hidden;
  }
}
@media (max-width:600px){
  .MainText, .MainText2{
    font-size: 1.5rem;
    line-height: 3.63333333rem;
    letter-spacing: -.104rem;
    font-weight: 700;
    overflow: hidden;
  }
}
</style>
