<template>
<v-container fluid class="ma-0 pa-0">

<v-row class="ma-0 pa-0">

    <v-col col="3" class="d-flex justify-start pa-0">
        <v-card v-if="this.$vuetify.breakpoint.smAndDown===false" class="transparent d-flex" elevation="0" height="100%" width="150px" to="/"><v-img style="z-index:5;" class="align-self-center" height="100%" width="100%" contain :src="LogoWhite===true ? require('@/assets/logo_black_wid.png') : require('@/assets/logo_white_wid.png')" ></v-img></v-card>
        <v-card v-if="this.$vuetify.breakpoint.smAndDown===true" class="transparent d-flex" elevation="0" height="100%" width="75px" to="/"><v-img style="z-index:5;" class="align-self-center" height="100%" width="100%" contain :src="LogoWhite===true ? require('@/assets/logo_black.png') : require('@/assets/logo_white.png') " ></v-img></v-card>
    </v-col>

    <v-spacer v-if="this.$vuetify.breakpoint.smAndDown===false"></v-spacer>

    <v-col cols="9" v-if="this.$vuetify.breakpoint.smAndDown===false">
        <v-tabs hide-slider background-color="transparent" :color=HeaderTextColor>
            <v-tab v-for="i in Menulist" :key="i.title" class="mx-auto tabs" :to="i.to">
                <p style="white-space:pre;" v-bind:style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}">
                </span><span class="borderspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
            </v-tab>
        </v-tabs>
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
        }
    },
    methods:{
    OpenDrawer(){
    this.$store.commit('SetDrawer',!this.$store.state.Drawerbool);
    },
    },
    computed:{
        HeaderTextColor(){
            return this.$store.state.HeaderTextColor;
        },
        LogoWhite(){
            return this.$store.state.LogoWhite;
        },
        Menulist(){
            return this.$store.state.Menulist;
        },
    },
}
</script>

<style scoped>
.EngFont{
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    letter-spacing:-.3px;
    font-size:1rem;
    min-width:90px;
}
.v-tab:hover .hoverspan {
    width:100%;
    opacity:1;
}
.hoverspan{
    bottom:0px; left:0; width:0; height:2px;
    position:absolute;
    transition: all .5s;
    z-index:2;
    opacity:0;
}
.borderspan{
    bottom:0px; left:0; width:0; height:2px;
    position:absolute;
    z-index:2;
    opacity:0;
}
</style>