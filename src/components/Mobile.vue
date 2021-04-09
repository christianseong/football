<template>
  <div id="MobileId" class="Mobile" v-show=mobiletabactive @click="clicktest">
      <div class="MobileTab" >

      </div>
      <div class=Backblur></div>
  </div>
</template>

<script>
export default {
data(){
    return{
    }
},
watch:{
  
},
computed:{
    mobiletabactive(){
        return this.$store.state.mobiletabactive;
    },
},
methods:{
  clicktest(){
    this.$store.commit('mobiletabact','false');
  }
}
}
</script>

<style scoped>
.Mobile{
    position:absolute;
    background-color:green;
    opacity:0.8;
    width:100%;
    height:100%;
    z-index:100;
    left:-50%;
}
.Backblur{
    position: absolute;
    display:none;
    width: 100%;
    height: 100%;
    z-index:99;
    opacity:0;
    background-color:black;
}
.moveleft{
    animation-name:leftsliding;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
.moveright{
    animation-name:rightsliding;
    animation-duration:2s;
    animation-fill-mode: forwards;
}
@keyframes leftsliding {
  0% {
    left:-100%;
  }
  100% {
    left:0%;
  }
}
@keyframes rightsliding {
  0% {
    left:0%;
  }
  100% {
    left:-100%;
  }
}
</style>