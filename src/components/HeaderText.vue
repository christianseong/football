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
  opacity:0;
  z-index:1;
  overflow:hidden;
  color:white;
  font-size: 1.3rem;
  letter-spacing: -.5px;
  font-weight: 100;
  white-space:pre;
}
.textholderani{
    animation-name:headerani;
    animation-duration:.3s;
    animation-fill-mode: forwards;
}
@keyframes headerani {
  0% {
    top:40%;
    opacity:0;
  }
  100% {
    top:30%;
    opacity:1;
  }
}
</style>
