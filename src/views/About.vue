<template>
<v-item-group multiple>
  <v-container>
    <v-row class="mt-16">
            <v-col
            class="mt-16"
              v-for="n in 3"
              :key="n"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="4"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  class="d-flex align-center red mt-16"
                  dark
                  height="fit-contents"
                  width="fit-contents"
                >
                <v-img
                cover
                  src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7kFn/image/XkqLnvHFmwU-T3X_mczfVnJ7meo"
                  >
                  <v-expand-transition>
                    <v-card
                      v-if="hover"
                      class=""
                      style="height: 100%; width:100%; opacity:0.5;"
                    >
                    빌게이츠입니다<br>마이크로소프트 회장
                    </v-card>
                  </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
    </v-row>
  </v-container>
  </v-item-group>
</template>

<script>
export default {
  components: {
  },
  methods:{

  },
  mounted(){
    this.$vuetify.goTo(0, {duration:300,offset:0,easing:'easeInOutCubic'});
    this.$store.commit('SetHeaderText','About');
  },
}
</script>

<style scoped>

</style>
