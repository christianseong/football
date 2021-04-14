<template>
<v-container>

</v-container>
</template>

<script>
export default {
components: {
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Apply');
  }
}
</script>

<style scoped>

</style>
