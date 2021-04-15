<template>
<div>
<v-card elevation="0"  class="overflow-y-auto" >
      <p style="position:absolute; z-index:1; color:white; font-size:0.5rem;">거의 모든 사진들은인터넷에서 퍼온사진이라 나중에 바꿔야댐</p>
      <v-img src="https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2019/05/27/Amsterdam-1928-football/2019-05-27-Amsterdam-1928-football-featured.jpg"></v-img>
      <p style="position:absolute; z-index:1;" class="MainText textholderani">FALL SEVEN TIMES</p>
      <p style="position:absolute; z-index:2;" class="MainText2 textholderani2">STAND UP EIGHT.</p>
</v-card>

<v-container style="overflow:hidden;" class="mt-16">

  <v-card elevation="5" id="ani1" class="my-16 pa-10 rounded-xl blue-grey lighten-4" v-intersect="onIntersect">
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

  <v-card elevation="5" id="ani2" class="pa-10 rounded-xl blue-grey lighten-4" v-intersect="onIntersect2" >
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
  },
  methods:{
    anireset(id,aniclass){
      const element = document.getElementById(id);
      element.classList.remove(aniclass);
      void element.offsetWidth;
      element.classList.add(aniclass);
    },
    onIntersect(){
      this.anireset('ani1','cardani');
    },
    onIntersect2(){
      this.anireset('ani2','cardani2');
    },
  },
  watch:{
  },
  computed:{
  }
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
.cardani{
  animation-name:cardani;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
@keyframes cardani {
  0% {
    right:-10%;
    opacity:0;
  }
  100% {
    right:0%;
    opacity:1;
  }
}
.cardani2{
  animation-name:cardani2;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
@keyframes cardani2 {
  0% {
    top:5%;
    opacity:0;
  }
  100% {
    top:0%;
    opacity:1;
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
