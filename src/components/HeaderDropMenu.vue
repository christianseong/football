<template>
<v-container fluid class="ma-0 pa-0">

<!-- 1 row -->
<hr>
<v-row class="ma-0 pa-0 ">
    <v-col col="3" class="d-flex justify-center pa-0"><v-card class="transparent" elevation="0" height="0px" width="150px"></v-card></v-col><v-spacer></v-spacer>

    <v-col cols="9" class="d-flex justify-space-around" v-if="this.$vuetify.breakpoint.smAndDown===false">
        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s1" :key="i.title" :to="i.to">
                <p style="white-space:pre;" :style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s2" :key="i.title" :to="i.to">
                <p style="white-space:pre;" :style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s3" :key="i.title" :to="i.to">
                <p style="white-space:pre;" :style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s4" :key="i.title" :to="i.to">
                <p style="white-space:pre;" :style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
            </v-tab>
        </v-card>

        <v-card class="ma-0 pt-0 transparent" elevation="0" >
            <v-tab v-for="i in s5" :key="i.title" :to="i.to">
                <p style="white-space:pre;" :style="{color:HeaderTextColor}" class="ma-0 EngFont">{{i.title}}</p>
                <span class="hoverspan" v-bind:style="{backgroundColor:HeaderTextColor}"></span>
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
            {title:"PEOPLE", to:'/about',},
            {title:"What we", to:'/about'},
            ],

            s2:[
            {title:"HISTORY", to:'/service',},
            ],
            s3:[
            {title:"cc", to:'/contact',},
            ],
            s4:[
            {title:"location", to:'/notice',},
            {title:"notice", to:'/notice'},
            ],
            s5:[
            {title:"sub1", to:'/apply',},
            {title:"sub2", to:'/apply'},
            {title:"sub3", to:'/apply'},
            {title:"sub4", to:'/apply'},
            {title:"sub5", to:'/apply'},
            ],
        }
    },
    computed:{
        HeaderTextColor(){
            return this.$store.state.HeaderTextColor;
        },
        HeaderColor(){
            return this.$store.state.HeaderColor;
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
    font-size:1rem;
    letter-spacing:-.3px;
}
.v-tab:hover .hoverspan {
    width:100%;
    opacity:.5;
}
.hoverspan{
    bottom:0px; left:0; width:0; height:1px;
    position:absolute;
    transition: all .5s;
    z-index:2;
    opacity:0;
}
</style>