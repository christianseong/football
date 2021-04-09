<template>
  <div class="Main">
    main
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  mounted(){
    this.$store.commit('setheadertext','Main');
  },

  data(){
    return{

    }
  },
  methods: {

  },

}
</script>

<style scoped>
.Main{
  position: relative;
  width:100%;
  height:fit-content;
  background-color:black;
  z-index:2;
  color:white;
}

</style>
