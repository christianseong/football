<template>
<v-container>
<h1>비즈니스가 있어야 가족이 있는거야~~~ -IndiGO-</h1>
<v-img src="https://mblogthumb-phinf.pstatic.net/MjAxOTEyMjBfNjUg/MDAxNTc2ODE4ODk0ODUw.TqAnECzhE3gProM9izUGIr1yTRqTg2O3DTqctGGMqUYg.7OTyBsI2mugKklNX7q87IoZIyEAdwBPMsxa1IuK03AMg.JPEG.pola0216/84336008.2.jpg?type=w800"></v-img>
</v-container>
</template>

<script>
export default {
components: {
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Business');
  }
}
</script>

<style scoped>

</style>
