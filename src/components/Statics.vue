<template>
   <section class="statistics-wrap">
        <div class="items-wrap">
          <dt class="text-center">
            참여 기업수
            <span class="unit"></span>
          </dt>

        <dd class="counter1" data-target="330">
            {{this.numbStart1}}
        </dd>
          
          
        </div>

        <div class="items-wrap">
          <dt class="text-center">
            에이전트 수
            <span class="unit"></span>
          </dt>

        <dd class="counter1" data-target="330">
            {{this.numbStart2}}
        </dd>
          
          
        </div>

        <div class="items-wrap">
          <dt class="text-center">
            참여 선수
            <span class="unit"></span>
          </dt>

        <dd class="counter1" data-target="330">
            {{this.numbStart3}}
        </dd>
          
          
        </div>
       
     
    </section>
</template>

<script>
export default {
    data(){
        return{
           numbStart1 : 0,
           target1 : 330,


           numbStart2 : 0,
           target2 : 540,

           numbStart3 : 0,

           target3 : 220
        }
    },

    methods: {
        counter(){
            const inc = 1;

            if(this.numbStart1<this.target1){
                this.numbStart1 =this.numbStart1 +inc;

                setTimeout(this.updateCount,1);
            }else{
                this.numbStart1=this.target1;
            }
        },

        updateCount(){

            const inc = 1;

            if(this.numbStart1<this.target1){
                this.numbStart1 =this.numbStart1 +inc;
                setTimeout(this.updateCount,1);
            }else{
                this.numbStart1=this.target1;
            }
        },

        counter1(){
            const inc = 1;

            if(this.numbStart2<this.target2){
                this.numbStart2=this.numbStart2 +inc;

                setTimeout(this.updateCount1,1);
            }else{
                this.numbStart2=this.target2;
            }
        },

        updateCount1(){

            const inc = 1;

            if(this.numbStart2<this.target2){
                this.numbStart2 =this.numbStart2 +inc;
                setTimeout(this.updateCount1,1);
            }else{
                this.numbStart2=this.target2;
            }
        },

        counter2(){
            const inc = 1;

            if(this.numbStart3<this.target3){
                this.numbStart3=this.numbStart3 +inc;

                setTimeout(this.updateCount2,1);
            }else{
                this.numbStart3=this.target3;
            }
        },

        updateCount2(){

            const inc = 1;

            if(this.numbStart3<this.target3){
                this.numbStart3 =this.numbStart3 +inc;
                setTimeout(this.updateCount2,1);
            }else{
                this.numbStart3=this.target3;
            }
        },


    },

  mounted(){
      this.counter();
      this.counter1();
      this.counter2();
  } 


}
</script>

<style scoped>

.statistics-wrap{
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}



.statistics-wrap dt{
    font-size: 30px;
    font-weight: 600;
    color: #4db570;
    letter-spacing: 1px;
}



.statistics-wrap dd {
    font-size: 144px;
    font-weight: bold;
    margin-inline-start: 0px;
}

.text-center{
    text-align: center;
}



</style>