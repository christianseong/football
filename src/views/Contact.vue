<template>
<v-container>
<h1>콘텍트 렌즈는 역시 아큐브~</h1>
<v-img src="https://t1.daumcdn.net/cfile/tistory/9944CD505C0CF4EC23"></v-img>
</v-container>
</template>

<script>
export default {
components: {
  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Contact');
  }
}
</script>

<style scoped>

</style>
