<template>
  <div id="main">
    <header-nav></header-nav>
    <div class="bannerList">
      <div class="bannerTr">
        <div class="listLeft">
          <h3>我们是行业未来的推动者 变革者 推动者</h3>
          <div class="messageText">
            赞物品牌立志于做美食行业安全体系的推动者、互联网行业的变革者、美好生活的创造者！
            将国内外美食产品通过甄选、管控、提炼，为美食爱好者提供高品质、美味、安全的美食产品,
            同时我们在新兴商业模式探索中开辟出不同于传统的新物种，志于解决美食爱好者的产品需求，创业需求，
            社交需求！
          </div>
        </div>
        <div class="listright">
          <div class="image">
            <img src="../../static/img/01.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="bannerTr">
        <div class="listLeft">
          <div class="image">
            <img src="../../static/img/02.jpg" alt="">
          </div>
        </div>
        <div class="listright">
          <h3>公司战略变革 目标</h3>
          <div class="messageText">
            帮助  <span>10</span>  个贫困地区解决产品销售<br />
            捐助  <span>1000 </span> 位贫困儿童实现教育<br />
            帮助  <span>1000000</span>  人实现创业梦想<br />
          </div>
        </div>
      </div>
      <div class="bannerTr">
        <div class="listLeft">
          <h3>联系我们</h3>
          <div class="messageText">
            邮箱：zanwu@zanwukeji.com
          </div>
        </div>
        <div class="listright">
          <div class="image">
            <img src="../../static/img/03.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderNav from "../components/header-nav.vue";
  import Footer from "../components/footer.vue"
  export default {
    components: {
      HeaderNav,
      Footer,
    },
  }
</script>

<style>
  .bannerList {
    clear: both;
    width: 1220px;
    min-height: 260px;
    margin: 0 auto;

  }

  .bannerTr {
    padding: 0 10px;
    width: 1200px;
    height: 300px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Catamaran;
    background: #FFFFFF;
    border-radius: 12px;
  }

  .listright h3 {
    font-weight: 800;
    font-size: 44px;
  }

  .listLeft h3 {
    font-weight: 800;
    font-size: 44px;
  }

  .messageText {
    width: 400px;
    margin-top: 20px;
    font-size: 18px;
    color: #000000;
  }
.messageText span{
  color: red;
}

  .image img {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
