<template>
  <section class="contact">
      <h2><router-link to="/Contact" class="about-link">Contact Us Freely</router-link></h2>
      <br>
      <span class="mail">christian199@naver.com</span>
  </section>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.contact{
    margin-top: 413px;
    margin-bottom: 337px;
    text-align: center;
}

.contact h2 {
    position: relative;
    display: inline-block;
    text-align: left;
    font-size: 108px;
    font-weight: 300;
    letter-spacing: -6.48px;
    line-height: 1.11;
    color: #4db570;
}

 a{
    text-decoration: none;
    color: inherit;
}

.contact .mail {
    font-size: 24px;
    letter-spacing: -1.44px;
    vertical-align: middle;
    text-decoration: underline;
    color: black;
}

</style>