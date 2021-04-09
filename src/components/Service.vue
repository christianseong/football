<template>
  <div class="Service">
      service
  </div>
</template>

<script>
export default {

   mounted(){
       this.$store.commit('setheadertext','Service');
   },
}
</script>

<style scoped>
.Service{
    position: relative;
    width:100%;
    height:fit-content;
  background-color:black;
    z-index:2;
    color:white;
}
</style>