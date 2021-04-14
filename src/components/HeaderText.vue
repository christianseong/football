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
  display: flex;
  justify-content: center;
  top:-130px;
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
    top:-120px;
    opacity:0;
  }
  100% {
    top:-130px;
    opacity:1;
  }
}
</style>
