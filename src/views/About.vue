<template>
  <v-container class="About">
    <div class="container">
      <div class="slogan" v-scrollanimation>
        <p>창업자들의 생각을 <br><span style="color: rgb(64, 189, 64)">현실</span>로 만들어줍니다</p>
      </div>
      <div>
        <div class="valueWrap">
          <div class="valueDiv" v-scrollanimation>
            <img class="value" src="../assets/stats.png">
            <dl>
              <h2 class="key-word">Impact</h2>
              <span class="contents-word">지속가능한 가치를 창출하는<br>기업을 육성합니다.</span>
            </dl>
          </div>
          <div class="valueDiv" v-scrollanimation>
            <img class="value" src="../assets/network.png">
            <dl>
              <h2 class="key-word">Network</h2>
              <span class="contents-word">최고의 전문 멘토와<br>네트워크를 제공합니다.</span>
            </dl>
          </div>
          <div class="valueDiv" v-scrollanimation>
            <img class="value" src="../assets/globalsoccer.png">
            <dl>
              <h2 class="key-word">Global</h2>
              <span class="contents-word">글로벌 시장 진출에 도움을 줍니다.</span>
            </dl>
          </div>
        </div>
        <div class="mentorWrap">
          <h2 class="key-word" v-scrollanimation style="margin-bottom: 60px">MENTOR</h2>
          <div class="imageWrap" v-scrollanimation>
            <div class="mentor" v-for="i in mentorList" :key="i.index">
              <v-row
                align="center"
                justify="center"
              >
                <v-card
                  height="300"
                  width="250"
                >
                  <v-row justify="center">
                    <img v-bind:src="i.image" class="mentor-image" @click="i.overlay = !i.overlay">
                    <v-overlay
                      :absolute="absolute"
                      :value="i.overlay"
                    >
                      <div class="mentor-name" @click="i.overlay = !i.overlay">
                        <h1>{{i.name}}</h1>
                        <span>{{i.position}}</span>
                      </div>
                    </v-overlay>
                  </v-row>
                </v-card>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </v-container>
</template>

<script>
import Footer from '../components/Footer'

export default {

  components: {
      Footer
  },
    
  data() {
    return {
      absolute: true,
      overlay: false,
      mentorList: [
        {name: "이창익", position: "토스 개발팀장", image: "http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png", overlay: false},
        {name: "박준후", position: "비트코인 10000개 보유", image: "http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png", overlay: false},
        {name: "성재호", position: "구글 개발팀장", image: "http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png", overlay: false},
        {name: "성재호", position: "구글 개발팀장", image: "http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png", overlay: false},
        {name: "성재호", position: "구글 개발팀장", image: "http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png", overlay: false},
      ]
    }
  },
  methods:{
  },
      beforeCreate(){
          this.$store.commit('setheadertext','About');
      },
      overlayOn() {
        this.overlay = true;
      },
      overlayOff() {
        this.overlay = false;
      }
  }
</script>

<style scoped>
.About{
  position: relative;
  width:100%;
  height:fit-content;
  background-color:black;
  z-index:2;
  color:white;
}
.slogan {
  text-align: center;
  font-weight: 600;
  font-size: 3.5rem;
  margin: 150px 0px;
  letter-spacing: -3px;
}
.container {
  /* margin: 0px 250px; */
}
.value {
  width: 200px;
  margin-right: 30px;
}
.valueWrap {
  margin: 0px 200px 0px 480px;
}
.mentorWrap {
  margin: 0px 250px;
}
.imageWrap { 
  display: flex;
}
.valueDiv  {
  display: flex;
  justify-content: left;
  margin-bottom: 100px;
}
.valueDiv dl {
  margin-left: 10%;
}
.key-word {
  margin: 0;
  font-size: 3.4rem;
  font-weight: bold;
}
.contents-word {
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: -2px;
  height: 30%;
}
.mentor {
  margin-right: 50px;
}
.mentorWrap h2 {
  margin-bottom: 70px;
}
.mentor-image {
  width: 248px;
  height: 298px;
  position: relative;
  top: 13px;
  cursor: pointer;
}
.mentor-name {
  width: 248px;
  height: 298px;
  cursor: pointer;
  text-align: center;
  padding-top: 100px;
}

.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.7s ease-out;
}

.enter{
    opacity: 1;
    transform: translateY(0px);
}


</style>