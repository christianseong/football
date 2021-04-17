<template>
<div>
  <h1> 노티스 view~</h1>
</div>
</template>

<script>
export default {
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','Notice');
    if(this.$vuetify.breakpoint.smAndDown===false)this.SetBoarderLine();
  },
   methods:{
    SetBoarderLine(){
      for(var i=0; i<this.$store.state.Menulist.length; i++)
      {
        if(this.$store.state.Menulist[i].title!='Notice'){
          document.getElementsByClassName('borderspan')[i].style.width = "0";
          document.getElementsByClassName('borderspan')[i].style.opacity = "0";
        }
        else{
          document.getElementsByClassName('borderspan')[i].style.width = "100%";
          document.getElementsByClassName('borderspan')[i].style.opacity = "1";
        } 
      }
    },
  },
    watch:{
    IsMobile(){
      if(this.IsMobile==true) return; 
      else this.SetBoarderLine();
    },
  },
  computed:{
    IsMobile(){
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style scoped>

</style>