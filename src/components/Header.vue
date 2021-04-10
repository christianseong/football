<template>
  <div class="Header" ondragstart="return false" onselectstart="return false" >
      <div id="backgroundhold" class="backgroundholder"></div>
      <div class="Nav" >
         <v-app-bar-nav-icon class="MenuBtn"
            @click="MenuBtnClicked"
            v-show=true
            color="white"
            size="25"
            >
         </v-app-bar-nav-icon>
          <div class="NavlogoHolder">
          <router-link to="/"><div class="logoholder"></div></router-link>
          </div>
          <div class="NavMenuHolder">
              <router-link to="/about">About</router-link>
          </div>

          <div class="NavMenuHolder">
              <router-link to="/business">Business</router-link>
          </div>
          
          <div class="NavMenuHolder">
              <router-link to="/service">Service</router-link>
          </div>

          <div class="NavMenuHolder">
              <router-link to="/contact">Contact</router-link>
          </div>

          <div class="NavMenuHolder">
              <router-link to="/apply">Apply</router-link>
          </div>
        </div>
        <div id="texthold" class="textholderani">
        <h1>{{headertext}}</h1>
        </div>
        
    </div>
</template>

<script>
export default {

data(){
    return{
    }
},
  methods:{
      anireset(id,aniclass){
          const element = document.getElementById(id);
          element.classList.remove(aniclass);
          void element.offsetWidth;
          element.classList.add(aniclass);
      },
      setwallpaper(src){
      var title = document.getElementById("backgroundhold");
      title.style.backgroundImage=`url(${src})`;
      },
      MenuBtnClicked(){
          var menudraw = this.$store.state.menudraw;
          this.$store.commit('setmenudraw',!menudraw);
      }
  },
  computed:{
      headertext(){
          return this.$store.state.headertext;
      },
  },
  watch:{
      $route(to){
          this.anireset("texthold","textholderani");
          switch(to.name){

            case "Main":
            this.setwallpaper("https://i.ibb.co/XLtXKhP/title-mono.png");
            break;
            
            case "About":
            this.setwallpaper("https://i.ibb.co/nf7PMVX/1.jpg");
            break;
                    
            case "Business":
            this.setwallpaper("https://i.ibb.co/PrTv1Sq/123-2.jpg");
            break;
            
            case "Service":
            this.setwallpaper("https://i.ibb.co/LtvrVTX/title.jpg");
            break;

            case "Contact":
            this.setwallpaper("https://i.ibb.co/tx1kKhT/Little-cat-im-hungry-Animal-Photo-HD-Wallpaper-1366x768.jpg");
            break;
            
            default:
            this.setwallpaper("https://i.ibb.co/pQmZKjZ/unnamed.jpg");
            break;
            }
        },
  }
}
</script>

<style scoped>
ul, ol, li{ 
    list-style:none;
}
.Header{
    transition: all 0.3s ease-in-out;
    position: relative;
    width:100%;
    height:455px;
    background-color:black;
}
.backgroundholder{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image:url("../assets/title_mono.png");
    background-position:center center;
    background-size:cover;
    opacity:0.5;
    z-index:1;
    filter:blur(1px);
}
.MenuBtn{
    display:none;
    left:3vw;
    top:3vh;
}
#texthold{
  position:absolute;
  display: flex;
  width: 100%;
  height:fit-content;
  justify-content: center;
  right:10%;
  top:70%;
  z-index:3;
  overflow: hidden;
}
.textholderani{
    animation-name:headerani;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
@keyframes headerani {
  0% {
    left:10%;
    opacity:0.3;
  }
  100% {
    left:0%;
    opacity:0.7;
  }
}
#texthold>h1{
  font-weight: 900;
  color:white;
  text-align: center;
  font-size: 5rem;
  letter-spacing: -8px;
  margin: 0 auto;
  padding: 0 5%;
}

.Nav{
    position: relative;
    display:flex;
    width:100%;
    height:100px;
    z-index:3;
}
.logoholder{
    width:100px;
    height:100%;
    background-image: url("../assets/biglogo.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.NavlogoHolder{
    position: relative;
    min-width:100px;
    height:100%;
    margin: 0 5%;
    justify-content: center;
    align-items: center;
    opacity:0.7;
}
.NavlogoHolder:hover{
    opacity:1;
    transition-duration:1s;
}
.NavMenuHolder{
    position: relative;
    display:flex;
    min-width:100px;
    height:100%;
    margin: 0 1% 0 1%;
    justify-content: center;
    align-items: center;
}
.LNavMenuHolder{
    position: relative;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    width:40%;
    height:100%;
    margin: 0 1% 0 1%;
}
.LNavMenuHolder>ul{
    position: relative;
    text-decoration:none;
    font-size:1rem;
    font-weight:300;
    color:white;
    opacity:0.7;
    cursor: pointer;
}
.LangSubMenu *{
    display: block;
    position: relative;
    
}
.NavMenuHolder>a{
    position: relative;
    width: fit-content;
    height:fit-content;
    text-decoration:none;
    font-size:1.3rem;
    font-weight:300;
    color:white;
    opacity:0.7;
}
.NavMenuHolder:hover a{
    opacity:1;
    transition-duration:0.5s;
    border-bottom: solid 2px white;
}
.NavEndMenuHolder{
    position: relative;
    display:flex;
    min-width:100px;
    height:100%;
    margin: 0 1% 0 1%;
    justify-content: center;
    align-items: center;
}
.MobileMenuHolder{
    position: absolute;
    display: none;
    width:0px;
    height:0px;
    }

@media (max-width: 900px) {
    .Header{
        transition: all 0.3s ease-in-out;
        min-height: 20vh;
    }
    h1{
        cursor:default;
    }
    .MenuBtn{
    display:block;
    }
    .logoholder{
        width:100px;
        height:100px;
        /* background-image: url("../assets/logo.png"); */
    }
    .NavlogoHolder{
        margin: 0 auto;
    }
    .NavMenuHolder{
        display:none;
    }
    #texthold>h1{
    font-weight: 900;
    color:white;
    text-align: center;
    font-size: 1.7rem;
    letter-spacing: -3px;
    margin: 0 auto;
    padding: 0 5.1%;
    }
    .LNavMenuHolder{
        display: none;
    }
    
    

}
@media (max-width: 250px) {
.MobileBtnHolder{
    display:block;
    position:absolute;
    height:20px;
    width:20px;
    top:20px;
    left:10px;
    z-index:5;
    background-image:url("../assets/mobile.png");
    background-size: cover;
    }
    .logoholder{
        width:100px;
        height:50px;
        background-image: url("../assets/logo.png");
    }
    
}
</style>