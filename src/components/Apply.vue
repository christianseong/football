<template>
  <div class="Apply">
      apply
  </div>
</template>

<script>
export default {

   mounted(){
       this.$store.commit('setheadertext','Apply');
   },
}
</script>

<style scoped>
.Apply{
    position: relative;
    width:100%;
    height:fit-content;
  background-color:black;
    z-index:2;
    color:white;
}
</style>