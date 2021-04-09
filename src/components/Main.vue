<template>
<div>
  <div class="Main">
    <router-link to="/about" class="about-link" v-scrollanimation>창업자들의 생각을 <br>현실로 만들어줍니다</router-link>


      <section class= "value-wrap" v-scrollanimation>
        <div class="animate">
          
          <img class="value" src="../assets/captain-america.png">
          <dl>
            <dt>Consist </dt>
            <dd style="white-space : pre-line">지속가능한 가치를 창출하는 기업을 육성합니다</dd>
          </dl>
        </div>

        <div class="animate">
          
          <img class="value" src="../assets/football.png">
          <dl>
            <dt>Impact </dt>
            <dd style="white-space : pre-line">지속가능한 가치를 창출하는 기업을 육성합니다</dd>
          </dl>
        </div>

        <div class="animate">
          
          <img class="value" src="../assets/desktop.png">
          <dl>
            <dt>Value </dt>
            <dd style="white-space : pre-line">지속가능한 가치를 창출하는 기업을 육성합니다</dd>
          </dl>
        </div>

      </section>

    
  </div>

  <Statics/>
  <Article/>
  <ContactLink/>
  <Footer/>
</div>

 

</template>

<script>
import Statics from '../components/Statics'
import Article from '../components/Article'
import ContactLink from '../components/ContactLink'
import Footer from '../components/Footer'

export default {
  name: 'Main',
  components: {
    Statics,
    Article,
    ContactLink,
    Footer
  },
  mounted(){
    this.$store.commit('setheadertext','Main');
  },

  data(){
    return{

    }
  },
  methods: {

  },

}
</script>

<style scoped>
.Main{
  position: relative;
  width:100%;
  height:fit-content;
  background-color:black;
  z-index:2;
  color:white;
  display: flex;
  justify-content: center;
}

section{
  margin: 0;
  padding: 0;
  
}

.about-link{
  position: absolute;
}
a{
  text-decoration: none;
  font-size: 40px;
  color : white;
  text-align: center;
   letter-spacing: -3px;
 

  
}


.value-wrap{
  margin-top : 200px;
  display :flex;
  justify-content: center;
  max-width: 1500px;
  text-align: center;
}

.value{
  height: 72px;
}

img{
  vertical-align: middle;
}

.value-wrap dl{
  margin : 0;
  padding: 0;
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}


.value-wrap dt{
  margin: 48px 0 20px;
  font-size: 30px;
  letter-spacing: -1.8px;
  font-weight: 700;
}

.value-wrap dd{
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -1.44px;
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
