<template>
<v-container>
  <v-img src="https://lh3.googleusercontent.com/proxy/lehAkBEMqeNlWPzFZOuOAmzx0pfu5lTamm_KoDcxTfOj9zku57119fZO6Lcdba7_ChMUwRsRej02ENble7cONVI7KpRuFdMCM3iOnS621jiW_ggq0JXreycIe4d01p2GyaGgMPY6_SkUXptgS40vJ3g51kL8L9BOPNu-hC82Q2m0dAzQg0EkY7oQdB-HIr-Th4UzUqQA23J2aFvqjQa2GykdyJMmKu3H9AQEU2ybRoAVPYLiKfJPH2Ssc27HtDRBnAKruYQLiAFo8DjzX2h6E_9e1TECj38a4iYRN5ZDbieW-I4Ijc9MAKgxGDolv_6-AgHZ09GdUFySR1aGm4bs"></v-img>
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
