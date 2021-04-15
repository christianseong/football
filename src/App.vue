<template>
<v-app>
  <Test/>
  <Drawer/>
  <Header/>
  <v-main>
    <router-view/>
  </v-main>
</v-app>
</template>

<script>

import Header from'@/components/Header.vue'
import Test from'@/components/test.vue'
import Drawer from'@/components/Drawer.vue'
export default {
  name: 'App',

  components: {
    Header,
    Test,
    Drawer,
  },

  data: () => ({
    //
  }),
};
</script>
