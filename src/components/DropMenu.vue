<template>
  <div class="text-center" style="position:fixed; top:0%; left:85%; z-index:100; ">
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
          <v-list-item-title><v-btn @click="this.OpenDrawer">사이드메뉴open</v-btn></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><v-btn @click="this.bonobono">타이틀이미지뭘로해야댐???;</v-btn></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch
              label="breakpoint 로그찍기"
              color="red"
              v-model="switch1"
            ></v-switch>
        </v-list-item>
        <v-list-item>
          <v-switch
              label="scrollY 로그찍기"
              color="blue"
              v-model="switch2"
            ></v-switch>
        </v-list-item>
        <v-list-item>
        <v-row justify="space-around">
        <v-col cols="auto">
        <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >팝업띄워보기바로사라짐</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >메뉴누르면 hover꺼지는속성때문에</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">바로사라짐 궁금하면 app.vue단에서 띄워보자..근데귀찮</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
        </v-dialog>
        </v-col>
        </v-row>
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
    if(this.switch1===true)
    {
    console.log("이것은 폰이냐??"+this.IsPhone,"사이즈는?"+this.$vuetify.breakpoint.name);
    }
  },
  ScrollY(){
    if(this.switch2===true)console.log(this.ScrollY);
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
  ScrollY(){
    return this.$store.state.ScrollY;
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
