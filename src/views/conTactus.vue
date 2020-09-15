<template>
  <div id="main">
    <header-nav></header-nav>
    <div class="activity-panel">
      <div class="bannerTop">
        <div class="bannerTopLeft">
          <el-carousel trigger="click" height="360px">
            <el-carousel-item>
              <img src="../../static/img/gongsi.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bannerTopright">
          <div class="imgRight">
            <div class="imgRigheCenter">
              <div class="iconfloat">
                <img src="../../static/img/address1.png" alt="" />
                <p>浙江省杭州市萧山区宁围街道望京大厦</p>
              </div>
              <div class="iconfloat">
                <img src="../../static/img/dianhua.png" alt="" />
                <p>400-160-0302</p>
              </div>
              <div class="iconfloat">
                <img src="../../static/img/youxiang.png" alt="" />
                <p>zanwu@zanwukeji.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--map-->
      <div class="mapImg" @click="clickMap()">
        <img src="../../static/img/daohang3.png" />
        <div class="mapDaohang">导航</div>
      </div>
    </div>
    <!-- 地图 -->
    <el-dialog width="1276px" title="杭州赞物科技有限公司" :visible.sync="dialogTableVisibles">
      <div class="address">
        地址：浙江省杭州市萧山区宁围街道望京大厦b座
      </div>
      <div class="mapwidth">
        <div id="allmap" class="Map" />
      </div>
    </el-dialog>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../components/footer.vue"
  import HeaderNav from "../components/header-nav.vue";
  export default {
    data() {
      return {
        market: [{

            "jing": 120.260403,
            "wei": 30.244518,

          },
          {
            "jing": 120.260403,
            "wei": 30.244518
          }
        ],
        dialogTableVisibles: false,
      }
    },
    //默认暴露一个模块
    components: {
      HeaderNav,
      Footer
    },
    methods: {
      clickMap() {
        this.dialogTableVisibles = true;
        this.$nextTick(() => {
          var map = new BMap.Map("allmap"); //初始化map, 绑定id=allmap
          var point = new BMap.Point(120.260403, 30.244518); // 初始化point, 给定一个默认x,y值
          map.centerAndZoom(point, 19); // 将point点放入map中，展示在页面中心展示，10=缩放程度
          map.enableScrollWheelZoom(); // 开启滚动鼠标滑轮
          this.market.forEach((e, i) => {
            console.log(e.jing)
            let pointNumber = new BMap.Point(e.jing, e.wei)
            // 点击坐标点提示弹框
            let infoWindow = new BMap.InfoWindow("浙江省杭州市萧山区宁围街道望京大厦b座", {
              width: 250,
              height: 200,
              title: "杭州市赞物科技有限公司"
            });
            var label = new BMap.Label("杭州市赞物科技有限公司", {
              offset: new BMap.Size(25, 5),
              imageOffset: new BMap.Size(0, 0 - i * 25) // 设置图片偏移
            });
            markerFun(pointNumber, infoWindow, label)
          })

          function markerFun(points, infoWindows, label) {
            var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
              offset: new BMap.Size(10, 25), // 指定定位位置
              imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移
            });
            let markers = new BMap.Marker(points, {
              icon: myIcon
            });
            map.addOverlay(markers);
            markers.setLabel(label);
            markers.addEventListener("click", function(event) {
              map.openInfoWindow(infoWindows, points); //参数：窗口、点  根据点击的点出现对应的窗口
            });
          }

        })
      },
    }
  }
</script>

<style>
  .activity-panel {
    clear: both;
    width: 1220px;
    height: auto;
    margin: 0 auto;
  }

  .bannerTop {
    width: 1220px;
    height: 400px;
    margin: 0 auto;
  }

  .mapwidth {
    width: 1276px;
    height: 600px;
  }

  .bannerTopLeft {
    float: left;
    width: 560px;
    height: 360px;
  }

  .bannerTopLeft img {
    display: block;
    width: 560px;
    height: 360px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .imgRight {
    font-size: 24px;
    font-family: FZLanTingYuanS-R-GB;
    font-weight: bold;
    color: #666;
    line-height: 20px;
    margin-left: 60px;
    display: flex;
    align-items: center;
  }

  .iconfloat {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iconfloat p {
    margin-left: 33px;
  }

  .imgRight img {
    width: 75px;
    height: 75px;
    display: block;
  }

  .imgRigheCenter {
    height: 240px;
    width: 100%;
  }

  .imgLeft img {
    display: block;
    width: 600px;
    height: 300px;
  }

  .bannerTopright {
    float: left;
    margin-top: 56px;
  }

  .mapImg {
    width: 1220px;
    height: auto;
    margin: 0 auto;
    position: relative;
  }

  .mapImg img {
    margin-top: 30px;
    display: block;
    width: 1220px;
    height: 191px;
  }

  .mapDaohang {
    position: absolute;
    z-index: 200;
    width: 228px;
    height: 61px;
    text-align: center;
    line-height: 61px;
    font-size: 36px;
    left: 40%;
    bottom: 60px;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 31px;
  }

  /* 地图 */
  .el-dialog__body {
    padding: 10px 15px 10px 15px !important;
  }

  .pageMap {
    max-width: 1220px;
    padding-top: 150px;
    height: auto;
    /*padding-bottom: 188px;*/
    margin: 0 auto;
  }

  .mapImg {
    margin-top: 58px;
    position: relative;
  }

  .Map {
    z-index: 0;
    height: 600px;
    width: 1254px;
  }

  .anchorBL {
    display: none;
  }
</style>
