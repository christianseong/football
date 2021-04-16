<template>
<div>
  <h1> 비지니스 view~</h1>
</div>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Business');
    this.$store.commit('SetHover',false);
    if(this.$vuetify.breakpoint.smAndDown===false)this.SetBoarderLine();
  },
   methods:{
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Business')document.getElementsByClassName('tabs')[i].style.borderBottom = "";
        else document.getElementsByClassName('tabs')[i].style.borderBottom = `2px solid ${this.$store.state.HeaderTextColor}`;
      }
    },
  },
}
</script>

<style scoped>

</style>