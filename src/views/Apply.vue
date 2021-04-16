<template>
<div>
  <h1> 어플라이 view~</h1>
</div>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Apply');
    this.$store.commit('SetHover',false);
    this.SetBoarderLine();
  },
   methods:{
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Apply')document.getElementsByClassName('tabs')[i].style.borderBottom = "0px solid white";
        else document.getElementsByClassName('tabs')[i].style.borderBottom = "2px solid white";
      }
    },
  },
}
</script>

<style scoped>

</style>