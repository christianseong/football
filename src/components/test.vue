<template>
  <div class="text-center" style="position:fixed; top:20%; left:0; z-index:100;">
    <v-menu
      open-on-hover
      offset-y
      dark
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          class="rounded"
        >
          실험실<v-icon x-large>mdi-cat</v-icon>
        </v-btn>
    </template>


      <v-list>

        <v-list-item>
        <v-switch
        label="breakpoint 로그찍기"
        color="red"
        v-model="switch1"
        ></v-switch>
        </v-list-item>

        <v-list-item>
        <v-switch
        label="dropmenu on"
        color="red"
        v-model="switch2"
        ></v-switch>
        </v-list-item>


      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{
        switch1:false,
        switch2:false,
      }
    },
watch:{
  IsPhone(){
    if(this.switch1===true) console.log("이것은 폰이냐??"+this.IsPhone,"사이즈는?"+this.$vuetify.breakpoint.name);
  },
  switch2(){
      this.$store.commit('SetTestHover',this.switch2);
  },

},
computed:{
  IsPhone(){
    switch(this.$vuetify.breakpoint.name){
      case 'xs' :  return true;
      case 'sm' :  return true;
      case 'md' :  return false;
      case 'lg' :  return false;
      case 'xl' :  return false;
      default:  return false;
    }
  },
},

methods:{
OpenDrawer(){
  this.$store.commit('SetDrawer',!this.$store.state.Drawerbool);
  console.log(this.$store.state.Drawerbool);
},
bonobono(){
  this.$store.commit('SetTitleImg','https://i.ibb.co/sjNtwp4/bonobono.png')
},


}
  }
</script>

<style>

</style>
