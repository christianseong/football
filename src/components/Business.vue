<template>
  <div class="Business">
      business
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
</style>