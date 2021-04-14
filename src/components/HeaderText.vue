<template>
<div>
<h1 id="texthold" class="textholderani" onselectstart="return false">{{headertext}}</h1>
</div>
</template>

<script>
export default {
computed:{
  headertext(){
      return this.$store.state.headertext;
  },
},
methods:{
  anireset(id,aniclass){
      const element = document.getElementById(id);
      element.classList.remove(aniclass);
      void element.offsetWidth;
      element.classList.add(aniclass);
  },
},
watch:{
  $route(){
      this.anireset("texthold","textholderani");
  },

},
}
</script>

<style scoped>

#texthold{
  position:absolute;
  width:100%;
  left:0%;
  display: flex;
  justify-content: center;
  opacity:0;
  z-index:5;
  overflow:hidden;
  color:white;
  font-size: 3rem;
  letter-spacing: -0.5px;
  font-family: 'Do Hyeon', sans-serif;
}
.textholderani{
    animation-name:headerani;
    animation-duration:.3s;
    animation-fill-mode: forwards;
}
@keyframes headerani {
  0% {
    top:50%;
    opacity:0;
  }
  100% {
    top:30%;
    opacity:.6;
  }
}
@media (max-width:1250px){
  #texthold{
    left:5%;
    font-size: 2.5rem;
  }
}
@media (max-width:1100px){
  #texthold{
    left:7%;
    font-size: 2.5rem;
  }
}
@media (max-width:1070px){
  #texthold{
    left:15%;
    font-size: 2.5rem;
  }
}
@media (max-width:960px){
  #texthold{
    font-size: 2rem;
  }
}

@media (max-width:770px){
#texthold{
    left:20%;
  }
  @keyframes headerani {
  0% {
    top:75px;
    opacity:0;
  }
  100% {
    top:30px;
    opacity:.6;
  }
  }
}
@media (max-width:620px){
#texthold{
    display: none;
  }
}
</style>
