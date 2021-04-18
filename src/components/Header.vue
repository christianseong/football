<template>
<v-container class="pa-0 ma-0 Header" fluid>
<v-app-bar
    app
    color="rgb(0, 150, 0)"
    flat
    height="74"
    class="pa-0"
    @mouseover="hoveract(true)"
    @mouseleave="hoveract(false)"
    >
    <v-container fluid>
        <HeaderText v-if="this.$vuetify.breakpoint.smAndDown===true" />
    <v-row>
        <v-col cols="12">
            <HeaderTabs/>
        </v-col>
        <v-fade-transition>
        <v-col cols="12" class="py-0" v-show="hover" style="background-color: rgb(0, 135, 0, .5); position:absolute; z-index:10; top:100%;">
            <HeaderDropMenu/>
        </v-col>
        </v-fade-transition>
    </v-row>
    </v-container>
</v-app-bar>
</v-container>
</template>

<script>
import HeaderTabs from'@/components/HeaderTabs.vue'
import HeaderDropMenu from'@/components/HeaderDropMenu.vue'
import HeaderText from'@/components/HeaderText.vue'
export default {
    name: 'Header',
    components:{
        HeaderTabs,
        HeaderDropMenu,
        HeaderText,
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        hoveract(bool){
            if(this.$store.state.TestHover===true)this.$store.commit('SetHover',bool);
        },
    },
    computed:{
        hover(){
            return this.$store.state.Hover;
        }
    },
}
</script>

<style scoped>
/deep/ .v-toolbar__content {
  padding: 0px !important;
}
</style>