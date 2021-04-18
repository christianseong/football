<template>
<div style="width:100%; height:100%; background-color:black;">
    <v-container>
        <v-row>
            <v-col style="height:400;" class="d-flex justify-center align-center" cols="12">
                <p class="white">MBTI TEST</p> <v-btn @click="test">test</v-btn>
            </v-col>
            <v-col cols="12" data-aos="fade-up">
                <v-card height="50vh" class="green darken-2 rounded-xl">
                    <v-card height="10%">
                        <v-progress-linear
                        color="green darken-4"
                        height="100%"
                        absolute
                        striped
                        :value="progress"
                        style="z-index:5;"
                        >
                        <template v-slot:default="{ value }">
                            <p>{{ Math.ceil(value) }}%</p>
                        </template>
                        </v-progress-linear>
                    </v-card>
                    <div class="message" ><p id="messageid" class="fadeup" v-html="message"></p></div>
                    <div class="background rounded-xl"></div>
                    
                    
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
data(){
    return{
        progress:0,
        mg:"나는 어떤 유형의 축구 선수 일까?\n 나의 선수 유형을 알아봐요"
    }
},
computed:{
    message(){
        return this.mg.replaceAll("\n", "<br>");
    },
},
methods:{
    anireset(id,aniclass){
        const element = document.getElementById(id);
        element.classList.remove(aniclass);
        void element.offsetWidth;
        element.classList.add(aniclass);
    },
    test(){
        this.mg="ㅇㅅㅇㅅㅇㅅㅇㅅㅇ\nㅇㅅㅇㅅㅇㅅ";
        this.anireset('messageid','fadeup');
    },
},

}
</script>

<style>
p{
    font-family: 'Do Hyeon','Noto Sans KR';
}
.message{
    position:absolute;
    color:white;
    width:100%;
    height: 100%;
    opacity:1;
    z-index:5;
    font-size:2rem;
    text-align: center;
    top:25vh;
}
#messageid{
    position: relative;
}
.background{
    background-image: url("../assets/mbti/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 45vh;
    opacity:.3;
    z-index:1;
}

/* 애니메이션  */
.fadeup{
    animation-name:fade_up;
    animation-duration:1s;
    animation-fill-mode: forwards;
}

/* 애니메이션  */
/* 키프레임 */
@keyframes fade_up {
  0% {
    top:20%;
    opacity:0;
  }
  100% {
    top:0%;
    opacity:1;
  }
}

/* 키프레임 */
</style>