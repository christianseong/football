<template>
<v-app>
  <Test/>
  <Drawer/>
  <Header/>
  <v-main>
    <router-view/>
  </v-main>
  <Footer/>
</v-app>
</template>

<script>

import Header from'@/components/Header.vue'
import Test from'@/components/test.vue'
import Drawer from'@/components/Drawer.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Test,
    Drawer,
    Footer
  },


  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
