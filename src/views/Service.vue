<template>
<div>
  <v-row class="d-flex justify-center align-center overflow-hidden" id="test">
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="12"
      lg="4"
      style="text-align: center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
    <h1 style="color: white">올데이풋볼은</h1><br>
    <h2 style="color: white">선수ㆍ지도자 출신 전문가들의 경험,<br>
    <span style="color: green; background-color: white; padding: 3px">축구선수 심층 데이터 분석</span><br>
    <span style="color: white">전 세계 약 280개국의 축구 이적시장</span><br>
    <span style="color: white">정보를 바탕으로 선수ㆍ구단ㆍ에이전트의</span><br>
    <span style="color: green; background-color: white; padding: 3px; margin-right: 3px">스카우팅 고민을 해결</span>해 드립니다.</h2><br>
    </v-col>
  </v-row>
  <v-container class="pt-5 mt-16">
    <v-row class="mt-16 mb-16 d-flex justify-center overflow-hidden">

      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        v-if="this.$vuetify.breakpoint.smAndDown===false"
      >
      <v-img
        src="../assets/모바일메인.png"
        max-width="200"
        contain
      ></v-img>
      </v-col>

      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        style="text-align: center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      <h1 class="pointFont">Point 1</h1>
      <h1>노력해도 어려웠던<br> 내 실력을 알리는 방법</h1><br>
      <h2>대회성적, 인맥에만 의종하는 이적은 그만!</h2><br>
      <h3>간단한 프로필 등록으로<br>
      최적의 구단ㆍ에이전트를<br>
      쉽고 빠르게 연결해드립니다.</h3><br>

      </v-col>

      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="false"
        class="d-flex justify-center"
        data-aos-anchor-placement="top-center"
        v-if="this.$vuetify.breakpoint.smAndDown===true"
      >
      <v-img
        src="../assets/모바일메인.png"
        max-width="200"
        contain
      ></v-img>
      </v-col>

    </v-row>
    <v-row class="mt-16 mb-16 d-flex justify-center overflow-hidden">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        style="text-align: center"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      <h1 class="pointFont">Point 2</h1>
      <h1>궁금했던 입단 정보,<br>
      테스트 정보 올데이풋볼에서</h1><br>
      <h2>구단의 공개 테스트 일정은 어떻게 될까?</h2><br>
      <h3>입단, 진학에 필요한 정보를<br>
      올데이풋볼에서<br v-if="this.$vuetify.breakpoint.smAndDown===true">
      자유롭게 알아보세요 !</h3><br>

      </v-col>

      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        class="d-flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      <v-img
        src="../assets/모바일구단정보.png"
        max-width="200"
        contain
      ></v-img>
      </v-col>

    </v-row>
    <v-row class="mt-16 mb-16 d-flex justify-center overflow-hidden">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        v-if="this.$vuetify.breakpoint.smAndDown===false"
      >
      <v-img
        src="../assets/모바일선수검색.png"
        max-width="200"
        contain
      ></v-img>
      </v-col>

      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        style="text-align: center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      <h1 class="pointFont">Point 3</h1>
      <h1>전 세계 구단의 이적 정보 안내</h1><br>
      <h2>어떤 구단, 어떤 에이전트를 만나야 할까요?</h2><br>
      <h3>선수의 포지션, 국적등의 비례한 에이전트, 구단 추천</h3><br>
      <h2>저는 이미 에이전트가 있습니다 !</h2><br>
      <h3>괜찮아요 ! 전 세계 다른 에이전트들도 올데이 풋볼<br>
      서비스를 통해 선수의 새로운 구단을 찾고 있습니다.</h3><br>

      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="false"
        class="d-flex justify-center"
        data-aos-anchor-placement="top-center"
        v-if="this.$vuetify.breakpoint.smAndDown===true"
      >
      <v-img
        src="../assets/모바일선수검색.png"
        max-width="200"
        contain
      ></v-img>
      </v-col>
    </v-row>
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
  * {
      font-family: 'Do Hyeon','Noto Sans KR';
    }
  h1 {
    font-size: 3.0rem;
  }
  h2 {
    font-size: 1.9rem;
    color: rgb(90, 90, 90);
  }
  h3 {
    font-size: 1.4rem;
    font-family: 'Noto Sans KR';
  }
  .pointFont {
    display: inline-block;
    background-color: green;
    padding: 0 1rem;
    color: white;
    font-size: 2.5rem;
    font-family: 'Noto Sans KR';
    border-radius: 50px;
    margin-bottom: 15px;
  }
  #test {
    background: url(../assets/bc2.png) center center no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    margin: 0;
  }
  @media (max-width:1400px){
    h1 {
      font-size: 3.0rem;
    }
    h2 {
      font-size: 1.9rem;
      color: rgb(90, 90, 90);
    }
    h3 {
      font-size: 1.4rem;
      font-family: 'Noto Sans KR';
    }
    .pointFont {
      display: inline-block;
      background-color: green;
      padding: 0 1rem;
      color: white;
      font-size: 2.5rem;
      font-family: 'Noto Sans KR';
      border-radius: 50px;
      margin-bottom: 15px;
    }
  }
  @media (max-width:800px){
    h1 {
      font-size: 3.0rem;
    }
    h2 {
      font-size: 1.9rem;
      color: rgb(90, 90, 90);
    }
    h3 {
      font-size: 1.4rem;
      font-family: 'Noto Sans KR';
    }
    .pointFont {
      display: inline-block;
      background-color: green;
      padding: 0 1rem;
      color: white;
      font-size: 2.5rem;
      font-family: 'Noto Sans KR';
      border-radius: 50px;
      margin-bottom: 15px;
    }
  }
  @media (max-width:600px){
    h1 {
      font-size: 2.0rem;
    }
    h2 {
      font-size: 1.4rem;
      color: rgb(90, 90, 90);
    }
    h3 {
      font-size: 1rem;
      font-family: 'Noto Sans KR';
    }
    .pointFont {
      display: inline-block;
      background-color: green;
      padding: 0 1rem;
      color: white;
      font-size: 1.5rem;
      font-family: 'Noto Sans KR';
      border-radius: 50px;
      margin-bottom: 15px;
    }
  }
</style>