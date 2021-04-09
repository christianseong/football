<template>
  <div id="app">
    <Mobile/>
    <Header/>
    
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Mobile from './components/Mobile.vue'
export default {
  name: 'App',
  components: {
    Header,
    Mobile,
  }
}
</script>


<style>
#app{
  position: relative;
  background-color: black;
  width:100%;
  height:100%;
}
</style>
