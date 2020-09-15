<template>
  <div id="main">
    <header-nav></header-nav>
    <!-- 轮播图 -->
    <div class="content page-order-payment">
      <div class="banner">
        <div class="bg" ref="bg" @mouseover="bgOver($refs.bg)" @mousemove="bgMove($refs.bg,$event)" @mouseout="bgOut($refs.bg)">
          <transition name="fade">
            <div class="imgs" v-for="(item, i) in banner" v-if="i===mark" :key="i" @click="linkTo(item)" @mouseover="stopTimer"
              @mouseout="startTimer">
              <img class="img1" :src="item.picUrl" alt="" />
            </div>
          </transition>
        </div>
        <div class="page">
          <ul class="dots">
            <li class="dot-active" v-for="(item, i) in banner" :class="{ 'dot':i!=mark }" :key="i" @click="change(i)"></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end -->
    <!-- banner -->
    <div class="activity-panel">
      <ul class="box">
        <li class="content_banner" v-for="item in bannerList" @click="linkTo(item)">
          <img class="images" :src="item.imageUrl">
          <a class="cover-link"></a>
        </li>
      </ul>
    </div>
    <!-- end -->
    <div class="sku-box store-content">
      <div class="sku_title">
        <h2>热门商品</h2>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <ShopItem :key="index" :item="item" v-for="(item ,index) in goodsList"></ShopItem>
        </div>
      </div>
    </div>
    <prompt v-if="maxCount"></prompt>
    <div class="sku-box store-content">
      <div class="sku_title">
        <h2>精品商品</h2>
      </div>
      <div class="gray-box">
        <div class="item-box">
          <ShopItem :key="index" :item="item" v-for="(item ,index) in goodsList"></ShopItem>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderNav from "../components/header-nav.vue";
  import Footer from "../components/footer.vue"
  import GoodsData from '../lib/newGoodsData';
  import ShopItem from "../components/shop-item"
  import prompt from "../components/prompt";
  export default {
    data() {
      return {
        goodsList: GoodsData,
        bannerList: [{
            imageUrl: 'https://resource.smartisan.com/resource/eca4f286fde41cebb778dc4f8bf055df.jpg'
          },
          {
            imageUrl: 'https://resource.smartisan.com/resource/33ea4bfa05068e0741b7278fec9da8a6.jpg'
          },
          {
            imageUrl: 'https://resource.smartisan.com/resource/fdc4370d1ce14a67fadc35d74209ac0f.jpg'
          },
          {
            imageUrl: 'https://resource.smartisan.com/resource/1023fe9691eaf03abbfd261b36df4985.png'
          }
        ],
        // 模拟banner数据
        banner: [{
            type: 0,
            productId: 150642571432835,
            fullUrl: 'https://resource.smartisan.com/resource/e7920d531a44438b6bb9cb7f83aa5c59.png',
            picUrl: 'https://resource.smartisan.com/resource/e7920d531a44438b6bb9cb7f83aa5c59.png',
          },
          {
            type: 0,
            productId: 150635087972564,
            fullUrl: 'https://resource.smartisan.com/resource/e7920d531a44438b6bb9cb7f83aa5c59.png',
            picUrl: 'https://resource.smartisan.com/resource/c3c4717e7f60a8d619d1eaf700fc0f20.png',
          },
        ],
        mark: 0,
        bgOpt: {
          px: 0,
          py: 0,
          w: 0,
          h: 0
        }
      }
    },
    components: {
      ShopItem,
      prompt,
      HeaderNav,
      Footer
    },
    computed: {
      maxCount() {
        return this.$store.state.maxOff;
      }
    },
    methods: {
      autoPlay() {
        this.mark++
        if (this.mark > this.banner.length - 1) {
          // 当遍历到最后一张图片置零
          this.mark = 0
        }
      },
      play() {
        // 每2.5s自动切换
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change(i) {
        this.mark = i
      },
      startTimer() {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      stopTimer() {
        clearInterval(this.timer)
      },
      linkTo(item) {
        // if (item.type === 0) {
        //   // 关联商品
        //   window.location.href = 'http://xmall.exrick.cn/#/goodsDetails?productId=' + item.productId
        // } else {
        //   // 完整链接
        //   window.location.href = item.fullUrl
        // }
      },
      bgOver(e) {
        this.bgOpt.px = e.offsetLeft
        this.bgOpt.py = e.offsetTop
        this.bgOpt.w = e.offsetWidth
        this.bgOpt.h = e.offsetHeight
      },
      bgMove(dom, eve) {
        let bgOpt = this.bgOpt
        let X, Y
        let mouseX = eve.pageX - bgOpt.px
        let mouseY = eve.pageY - bgOpt.py
        if (mouseX > bgOpt.w / 2) {
          X = mouseX - bgOpt.w / 2
        } else {
          X = mouseX - bgOpt.w / 2
        }
        if (mouseY > bgOpt.h / 2) {
          Y = bgOpt.h / 2 - mouseY
        } else {
          Y = bgOpt.h / 2 - mouseY
        }
        dom.style['transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
        dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      },
      bgOut(dom) {
        dom.style['transform'] = 'rotateY(0deg) rotateX(0deg)'
        dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
      }
    },
    created() {
      this.play()
    }
  }
</script>

<style scoped>
  .header-desktop {
    display: none;
  }

  .content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    /*    padding: 0 0 25px; */
    margin: 0 auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .banner,
  .banner span,
  .banner div {
    font-family: "Microsoft YaHei";
    transition: all 0.3s;
    transition-timing-function: linear;
  }

  .banner {
    cursor: pointer;
    perspective: 3000px;
    position: relative;
    z-index: 19;
    margin: 0 auto;
    width: 1220px;
  }

  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateY(0deg) rotateX(0deg);
  }

  .bg & div {
    height: 100%;
    width: 100%;
  }

  .imgs {
    position: absolute;
  }

  .img1 {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .images {
    cursor: pointer;
    transition: all 0.6s;
    display: block;
    width: 310px;
    height: 200px;
  }

  .content_banner img:hover {
    transform: scale(1.1);
    position: relative;
    z-index: 100;
  }

  .a {
    z-index: 20;
    transform: translateZ(40px);
  }

  .b {
    z-index: 20;
    transform: translateZ(30px);
  }

  .page {
    position: absolute;
    width: 100%;
    top: 470px;
    z-index: 30;


  }

  .img {
    display: block;

    width: 100%;
    height: 100%;

    border-radius: 10px;
  }

  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .dot-active {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
  }

  .dot {
    opacity: 0.2;
  }

  /* 商品列表 */
  .sku-box {
    position: relative;
  }

  .gray-box {
    overflow: hidden;
    background: #fff;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }

  .sku-box .item-box {
    clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
  }

  .sku_title {
    background-color: #fafafa;
    line-height: 60px;
    font-size: 18px;
    border-radius: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding-left: 30px;
  }

  .activity-panel {
    clear: both;
    width: 1220px;
    height: 260px;
    margin: 0 auto;
  }

  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }

  .content_banner {
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
  }

  .store-content {
    min-height: 500px;
  }

  /*  footer{} */
  .footer {
    padding: 25px 0 20px;
    border-top: 1px solid #e6e6e6;
    background: #fafafa;
    height: 80px;

  }

  .container {
    width: 1220px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container_right {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    font-family: FZLanTingYuanS-R-GB;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .container_right img {
    display: block;
    width: 62px;
    height: 62px;
    margin-left: 12px;
  }

  .container_left {
    width: 50%;
  }
</style>
