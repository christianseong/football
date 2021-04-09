<template>
  <div class="About">
      about
  </div>
</template>

<script>
export default {
methods:{
},
    beforeCreate(){
        this.$store.commit('setheadertext','About');
    },
}
</script>

<style scoped>
.About{
    position: relative;
    width:100%;
    height:fit-content;
  background-color:black;
    z-index:2;
    color:white;
}
</style>