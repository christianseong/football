<template>
  <v-app v-scroll="onScroll">
      <Header/>
      <HeaderText/>
      <Drawer/>
      <Drop/>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>

import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'
import Drop from '@/components/DropMenu.vue'
import HeaderText from '@/components/HeaderText.vue'
export default {
  name: 'App',

  components: {
    Drawer,
    Header,
    Drop,
    HeaderText,
  },

  data: () => ({

  }),

  mounted(){
  },
  methods:{
    onScroll(){
      this.$store.commit('SetScrollY',window.scrollY);
    },
  }
};
</script>

<style scoped>
</style>
