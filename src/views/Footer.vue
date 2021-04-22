<template>
<v-container style="text-align: center;" id="footerWrap">
    <v-row class="mt-8 mb-4 d-flex justify-center">
        <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        >
        <v-card elevation="0">
            <v-img
            src="../assets/logo_black_wid.png"
            max-width="200"
            contain
            class="logoImage"
            ></v-img>
        </v-card>
        </v-col>
    </v-row>
    <v-row class="mb-10 d-flex" style="text-align: left">
        <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        ><h1>CONTACT</h1>
        <p>official@alldayfootball.net<br>
        031-8073-9700<br>
        경기도 고양시 덕양구 고양대로1670번길 77-7 KR A동 301호</p>
        </v-col>
        <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        ><h1>SOCIAL</h1>
        <a href="#" class="font-color">Facebook</a><br>
        <a href="#" class="font-color">Instagram</a><br>
        </v-col>
    </v-row>
    <v-row class="mb-3 d-flex" style="text-align: left">
        <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        class="d-flex"
        ><a href="/terms-service" class="font-color">이용약관</a> 
        <a href="/privacy-policy" class="font-color">개인정보처리방침</a> 
        <a href="/youth-policy" class="font-color">청소년보호정책</a> 
        <a href="/article-remove-policy" class="font-color"> 게시물삭제정책</a> 
        </v-col>
        <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        v-if="this.$vuetify.breakpoint.smAndDown===false"
        ><div></div>
        </v-col>
    </v-row>
    <v-row class="mb-12 d-flex" style="text-align: left">
        <v-col
        cols="12"
        xs="12"
        sm="8"
        md="6"
        lg="6"
        ><p>Copyright(c) Alldayfootball All rights reserved.</p>
        </v-col>
        <v-col
        cols="12"
        xs="12"
        sm="4"
        md="6"
        lg="6"
        style="text-align: right"
        ><a href="#" class="font-color">서비스페이지</a>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
#footerWrap {
    max-width: 1024px;
}
h1 {
    font-family: 'Noto Sans KR';
    font-size: 1.4rem;
    margin-bottom: 7px;
}
a {
    margin-right: 10px;
    text-decoration: none;
    font-family: 'Noto Sans KR';
    font-size: 0.9rem;
}
p {
    font-family: 'Noto Sans KR';
    font-size: 0.9rem;
}
.font-color {
    color: black;
}
.font-color:hover {
    text-decoration-line: underline;
}
@media (max-width:1400px){
}
@media (max-width:800px){
}
@media (max-width:600px){
    h1 {
    font-family: 'Noto Sans KR';
    font-size: 1.2rem;
    margin-bottom: 7px;
    }
    a {
    margin-right: 10px;
    text-decoration: none;
    font-family: 'Noto Sans KR';
    font-size: 0.8rem;
    }
    p {
    font-family: 'Noto Sans KR';
    font-size: 0.8rem;
    }
}
</style>