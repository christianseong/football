<template>
  <div class="Business" v-scrollanimation>
      <h1></h1>
  </div>
</template>

<script>
export default {

   mounted(){
       this.$store.commit('setheadertext','Business');
   },
}
</script>

<style scoped>
.Business{
    position: relative;
    width:100%;
    height:fit-content;
  background-color:black;
    z-index:2;
    color:white;
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