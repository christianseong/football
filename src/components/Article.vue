<template>
<div>
  <div class="textWrap">
      <h2><router-link to="/Service" class="about-link">Our Service</router-link></h2>


  </div>

  <div class="article-wrap">
      <article>
          <h3 style="color:black">임팩트업, 교보 다솜이 드림 메이커스 </h3>
          <p style="color:#BDBDBD">재단법인 홍합밸리와 교보생명, 생명보험사회공헌위원회가 함께 운영하는 소셜벤처 발굴 및 육성 프로그램 ‘임팩트업’! 아동과 청소년 등 미래세대를 위한 교육, 복지, 보건 분야에서 혁신적 사업을 추진하는 스타트업을 발굴하고 육성하고 있습니다. 국내 기업이 청소년 육성을 위한 사회적기업 발굴에 나선 건 교보생명이 처음인데요, 지난 2년 동안 미래세대 교육서비스 등을 핵심사업으로 하는 8개 기업을 선발해 지원한 데 이어, 3년차를 맞은 올해도 ICT 기반의 5개 스타트업을 선발했습니다. ‘교보 다솜이 드림 메이커스’는 디지털 기술에 소외된 청소년에게 교육 기회를 제공해 취업과 진학을 돕는 프로그램으로, (재)홍합밸리와 교보생명이 함께 운영하고 있습니다.</p>
          <em>2020.12.07</em>
      </article>

      <article>
          <h3 style="color:black">임팩트업, 교보 다솜이 드림 메이커스 </h3>
          <p style="color:#BDBDBD">재단법인 홍합밸리와 교보생명, 생명보험사회공헌위원회가 함께 운영하는 소셜벤처 발굴 및 육성 프로그램 ‘임팩트업’! 아동과 청소년 등 미래세대를 위한 교육, 복지, 보건 분야에서 혁신적 사업을 추진하는 스타트업을 발굴하고 육성하고 있습니다. 국내 기업이 청소년 육성을 위한 사회적기업 발굴에 나선 건 교보생명이 처음인데요, 지난 2년 동안 미래세대 교육서비스 등을 핵심사업으로 하는 8개 기업을 선발해 지원한 데 이어, 3년차를 맞은 올해도 ICT 기반의 5개 스타트업을 선발했습니다. ‘교보 다솜이 드림 메이커스’는 디지털 기술에 소외된 청소년에게 교육 기회를 제공해 취업과 진학을 돕는 프로그램으로, (재)홍합밸리와 교보생명이 함께 운영하고 있습니다.</p>
          <em>2020.12.07</em>
      </article>
  </div>
</div>
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
a{
    list-style: none;
    text-decoration: none;
    color:inherit;
}
.textWrap{
    text-align: center;
    margin-top: 100px;
}

.about-link{
    bottom: -10px;
    right: -80px;
    width: 163px;
    font-size: 60px;
    text-align: right;
    color: black;
    background-color: transparent;
    border: 0;
    border-bottom: 5px solid #fff;
    
}

.article-wrap{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.article-wrap article{
    margin-top: 72px;
    display: inline-block;
    max-width: 600px;
    width: 100%;
    
}

.article-wrap article h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -2.16px;
    overflow: hidden;
    text-overflow: ellipsis;
}

 .article-wrap article p {
    margin: 24px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 60px;
    font-size: 24px;
    letter-spacing: -1.44px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
}

 .article-wrap article em {
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -1.08px;
}


</style>