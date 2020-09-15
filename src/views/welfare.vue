<template>
  <div id="main">
    <header-nav></header-nav>
    <div class="bgMessage">
      <div class="title">
        <p>公司战略变革<span style="color: #FEFE40;">目标</span></p>
      </div>
      <ul class="tit_list">
        <li><i>帮助</i> &ensp;10 &ensp;<i>个贫困地区解决产品销售</i></li>
        <li><i>捐助</i> &ensp;1000 &ensp;<i>位贫困儿童实现教育</i></li>
        <li><i>帮助</i> &ensp;1000000 &ensp;<i>人实现创业梦想</i></li>
      </ul>
    </div>
    <Footer></footer>
  </div>
</template>

<script>
  import HeaderNav from "../components/header-nav.vue";
  import Footer from "../components/footer.vue"
  export default {
    components: {
      HeaderNav,
      Footer
    },
  }
</script>

<style>
  .bgMessage {
    clear: both;
    width: 1220px;
    height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    background: url(../../static/img/images.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .title {
    font-size: 60px;
    line-height: 100px;
    color: #FFFFFF;
  }

  .tit_list li {
    font-size: 36px;
    color: #FEFE40;
  }

  .tit_list li i {
    color: #FFFFFF;
    font-style: normal;
  }
</style>
