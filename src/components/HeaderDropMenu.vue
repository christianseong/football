<template>
<v-container fluid class="ma-0 pa-0">

<!-- 1 row -->
<v-row class="ma-0 pa-0 ">
    <v-col col="3" class="d-flex justify-center pa-0"><v-card class="transparent" elevation="0" height="0px" width="150px"></v-card></v-col><v-spacer></v-spacer>

    <v-col cols="6" class="d-flex justify-space-around" v-if="this.$vuetify.breakpoint.smAndDown===false">
        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s1" :key="i.title" :to="i.to">
                <p style="white-space:pre;" class="ma-0 EngFont">{{i.title}}</p>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s2" :key="i.title" :to="i.to">
                <p style="white-space:pre;" class="ma-0 EngFont">{{i.title}}</p>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s3" :key="i.title" :to="i.to">
                <p style="white-space:pre;" class="ma-0 EngFont">{{i.title}}</p>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s4" :key="i.title" :to="i.to">
                <p style="white-space:pre;" class="ma-0 EngFont">{{i.title}}</p>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s5" :key="i.title" :to="i.to">
                <p style="white-space:pre;" class="ma-0 EngFont">{{i.title}}</p>
            </v-tab>
        </v-card>

    </v-col>
    

    <v-spacer></v-spacer><v-col cols=1 class="pa-0"></v-col>
</v-row>
<!-- 1 row -->

</v-container>
</template>

<script>
export default {
    name: 'HeaderDropMenu',
    data(){
        return{
            s1:[
            {title:"PEOPLE", to:'/',},
            {title:"What we", to:'/'},
            ],

            s2:[
            {title:"HISTORY", to:'/',},
            ],
            s3:[
            {title:"cc", to:'/',},
            ],
            s4:[
            {title:"location", to:'/',},
            {title:"notice", to:'/'},
            ],
            s5:[
            {title:"sub1", to:'/',},
            {title:"sub2", to:'/'},
            {title:"sub3", to:'/'},
            {title:"sub4", to:'/'},
            {title:"sub5", to:'/'},
            ],
        }
    },
    computed:{
        menulist(){
            return this.$store.state.menulist;
        },
    },
    metohds:{
    },
}
</script>

<style scoped>
.EngFont{
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
    color:white;
    font-size:1rem;
    letter-spacing:-.5px;
}
.v-tab, .v-tab:hover {
  width:100px;
  border-bottom: .5px solid rgba(255,255,255, .0);
}
</style>