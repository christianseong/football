<template>
<div>
  <h1> 컨택트 view~</h1>
</div>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Contact');
  },
}
</script>

<style scoped>

</style>