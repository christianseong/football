<template>
  <div class="Contact">
      contact
  </div>
</template>

<script>
export default {

   mounted(){
       this.$store.commit('setheadertext','Contact');
   },
}
</script>

<style scoped>
.Contact{
    position: relative;
    width:100%;
    height:fit-content;
  background-color:black;
    z-index:2;
    color:white;
}
</style>