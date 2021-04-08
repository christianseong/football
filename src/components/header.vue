<template>

  <header class="main" style="background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdiiGei%2FbtqCn1hTTgs%2FURimITOQFns95kKz4AVNvk%2Fimg.jpg')">
    <div class="container menu-container">
        <div class ="logoWrap">
            <a href="/">
             <img src="../assets/white_logo.png" alt="allground logo"/>
            </a>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

header.main{
    height: 455px;
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
    width: 400px;
    height: 200px;
}

img, svg {
    vertical-align: middle;
}


</style>