<template>
<v-container fluid class="ma-0 pa-0">

<v-row class="ma-0 pa-0">

    <v-col col="3" class="d-flex justify-center pa-0">
        <v-card class="transparent" elevation="0" height="50px" width="150px" to="/"  v-if="this.$vuetify.breakpoint.smAndDown===false">
            <v-img style="z-index:5;" class="align-self-center" height="100%" width="100%" contain src="@/assets/logo_white_wid.png" ></v-img>
        </v-card>
        <v-card class="transparent align-self-center" elevation="0" height="30px" width="150px" to="/"  v-if="this.$vuetify.breakpoint.smAndDown===true">
            <v-img style="z-index:5;" class="align-self-center" height="100%" width="100%" contain src="@/assets/small_logo_white.png"></v-img>
        </v-card>
    </v-col>

    <v-spacer v-if="this.$vuetify.breakpoint.smAndDown===true"></v-spacer>

    <v-col cols="6" class="d-flex justify-space-around" v-if="this.$vuetify.breakpoint.smAndDown===false">
        <div v-for="i in menulist" :key="i.title" class="tabs" ><v-tab :to="i.to">
        <p style="white-space:pre; " class="ma-0 EngFont">{{i.title}}</p><span class="borderspan"></span>
        </v-tab></div>
    </v-col>

    <v-spacer></v-spacer>

    <v-col cols=1 class="pa-0">
            <v-app-bar-nav-icon @click="OpenDrawer" style="z-index:5;" dark v-if="this.$vuetify.breakpoint.smAndDown===true"></v-app-bar-nav-icon>
    </v-col>

</v-row>

</v-container>
</template>

<script>
export default {
    name: 'HeaderTabs',
    data(){
        return{
            menulist:[
            {title:"ABOUT", to:'/about',},
            {title:"BUSINESS", to:'/business'},
            {title:"CONTACT", to:'/contact'},
            {title:"NOTICE", to:'/notice'},
            {title:"APPLY", to:'/apply'},
            ],
        }
    },
    methods:{
    OpenDrawer(){
    this.$store.commit('SetDrawer',!this.$store.state.Drawerbool);
    console.log(this.$store.state.Drawerbool);
    },
    },
    computed:{
    },
}
</script>

<style scoped>
.EngFont{
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color:white;
}
.v-tab:hover .borderspan {
    width:100%;
    opacity:1;
}
.borderspan{
    bottom:-8px; left:0; width:0; height:1.8px;
    position:absolute;
    background:white;
    transition: all .2s;
    z-index:2;
    opacity:0;
}
</style>