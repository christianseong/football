<template>

  <header class="main" >
    <div class="container menu-container">
        <div class ="logoWrap">
            <router-link to="/">
             <img src="../assets/white_logo.png" alt="allground logo"/>
           </router-link>
        </div>


        <nav class="m-d-none">
            <ul>
                <li> <router-link to="/about">ABOUT</router-link></li>
                <li> <router-link to="/about">BUISNESS</router-link></li>
                <li> <router-link to="/about">PORTFOLIO</router-link></li>
                <li> <router-link to="/about">BOARD</router-link></li>
                <li> <router-link to="/about">APPLY</router-link></li>

            </ul>
        </nav>
    </div>

    <h1 class="main-title" v-scrollanimation>Best Accelerator for Startups that Monetize from Impacts</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

header.main{
    height: 455px;
    background-image: url(../assets/title.jpg);
}

header{
    position: relative;
    width: 100%;
    height: 336px;
    background: gray;
    background-size: cover;
    background-position: center center;
}


header .container.menu-container{
    padding-top: 33px;
    padding-bottom: 33px;
    display: flex;
    justify-content: space-between;
}

.container{
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1500px;
    box-sizing: border-box;
}

header .container .logoWrap img {
    width: 200px;
    height: 100%;
}

@media (max-width:600px){
    header .container .logoWrap img{
        width: 200px;
        height: 100px;
    }
}

img, svg {
    vertical-align: middle;
}

header nav ul {
    display: flex;
}

ol, ul, li {
    list-style: none;
}

.menu-container nav a {
    position: relative;
    margin-right: 72px;
    font-size: 40px;
    font-weight: 200;
    line-height: 1.75;
    letter-spacing: -1.2px;
    text-align: center;
     text-decoration: none;
    color: #ffffff;
}

.index-page .main-title {
    font-size: 80px;
}

element.style {
    white-space: pre-line;
    visibility: visible;
   
}

header h1 {
    position: absolute;
    bottom: -72px;
    width: 100%;
    font-size: 144px;
    font-weight: 900;
    letter-spacing: -8.64px;
    text-align: center;
    height: 200px;

    margin: 0;
    padding: 0;
}

.before-enter{
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.7s ease-out;
}

.enter{
    opacity: 1;
    transform: translateY(0px);
}

</style>