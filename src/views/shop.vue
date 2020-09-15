<template>
  <div id="main">
    <header-nav></header-nav>
    <div class="sku-box store-content">
      <div class="sort-option">
        <ul class="line clear">
          <li><a href="javascript:;" class="active">赞物商品</a></li>
        </ul>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <ShopItem :key="index" :item="item" v-for="(item ,index) in goodsList"></ShopItem>
        </div>
      </div>
    </div>
    <prompt v-if="maxCount"></prompt>
  <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../components/footer.vue"
  import HeaderNav from "../components/header-nav.vue";
  import GoodsData from '../lib/newGoodsData';
  import ShopItem from "../components/shop-item"
  import prompt from "../components/prompt";
  export default {
    //默认暴露一个模块
    data() {
      return {
        goodsList: GoodsData
      }
    },
    components: {
      HeaderNav,
      ShopItem,
      prompt,
      Footer
    },
    computed: {
      maxCount() {
        return this.$store.state.maxOff;
      }
    }
  }
</script>

<style>
  .sku-box {
    position: relative;
  }

  .sort-option {
    border-top: 1px solid #D8D8D8;
    color: #999;
  }

  .sort-option ul {
    height: 60px;
    line-height: 60px;
  }

  .sort-option li {
    position: relative;
    float: left;
    padding-left: 42px;
  }

  .sort-option li:first-child {
    padding-left: 9px;
  }

  .sort-option li:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 20px;
    top: 50%;
    width: 2px;
    height: 2px;
    margin-top: -1px;
    background: #C7C7C7;
  }

  .sort-option li:first-child:before {
    display: none;
  }

  .sort-option a {
    display: block;
    font-size: 16px;
    color: #999;
  }

  .sort-option a.active,
  .sort-option a:hover {
    color: #5683EA;
  }

  .gray-box {
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }

  .sku-box .item-box {
    clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
  }
</style>
