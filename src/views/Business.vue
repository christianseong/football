<template>
<div>
  <h1> 비지니스 view~</h1>
</div>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Bussiness');
    this.$store.commit('SetHover',false);
  },
}
</script>

<style scoped>

</style>