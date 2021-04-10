<template>
  <div class="About">
      <div class="container">
        <div class="slogan" v-scrollanimation>
          <p>창업자들의 생각을 <br><span style="color: rgb(64, 189, 64)">현실</span>로 만들어줍니다</p>
        </div>
        <div>
          <div class="valueWrap">
            <div class="valueDiv" v-scrollanimation>
              <img class="value" src="../assets/captain-america.png">
              <dl>
                <h2 class="key-word">Impact</h2>
                <span class="contents-word">지속가능한 가치를 창출하는<br>기업을 육성합니다.</span>
              </dl>
            </div>
            <div class="valueDiv" v-scrollanimation>
              <img class="value" src="../assets/football.png">
              <dl>
                <h2 class="key-word">Network</h2>
                <span class="contents-word">최고의 전문 멘토와<br>네트워크를 제공합니다.</span>
              </dl>
            </div>
            <div class="valueDiv" v-scrollanimation>
              <img class="value" src="../assets/desktop.png">
              <dl>
                <h2 class="key-word">Global</h2>
                <span class="contents-word">글로벌 시장 진출에 도움을 줍니다.</span>
              </dl>
            </div>
          </div>
          <div class="mentorWrap">
            <h2 class="key-word" v-scrollanimation>MENTOR</h2>
            <div class="hoverWrap" v-scrollanimation>
              <div class="imageWrap">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
                <img src="http://ac.honghapvalley.org/uploads/content/Mentor/1614234775196_mentor-default.png" class="modalTarget">
              </div>
              <div class="bindName">
                <div class="line1">123</div>
                <div class="line2">456</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    imageList: {

    }
  }
},
methods:{
},
    beforeCreate(){
        this.$store.commit('setheadertext','About');
    },
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
  font-size: 3.5rem;
  margin: 150px 0px;
}
.container {
  margin: 0px 250px;
}
.value {
  width: 200px;
  margin-right: 30px;
}
.valueWrap {
  margin: 0px 250px;
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
  font-size: 3.2rem;
}
.contents-word {
  font-size: 2rem;
  height: 30%;
}
.hoverWrap { 
  display: flex;
}
.bindName {
  width: 20%;
}
.mentorWrap h2 {
  margin-bottom: 80px;
}
.modalTarget {
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  margin-right: 24px;
  cursor: pointer;
}
.line1 {
  height: 224px;
}
.line2 {
  height: 224px;
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