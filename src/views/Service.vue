<template>
<v-container>
<h1 style="text-align:end;">더 굽혀 이쉑기야.jpg</h1>
<v-img src="https://rnc.samsungcnt.com/company/rd2/academy/__icsFiles/artimage/2015/07/07/gamc_b4aca00/img_academy03.jpg"></v-img>
</v-container>
</template>

<script>
export default {
components: {
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Service');
  }
}
</script>

<style scoped>

</style>
