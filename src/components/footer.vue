<template>
 <div class="footer">
      <div class="container">
        <div class="container_left">
          <div>浙ICP备19044156号
          </div>
          <div>
            地址:浙江省杭州市萧山区宁围街道望京大厦B座39楼
            <span style="margin-left: 20px;">电话:400-160-0302</span>
          </div>
        </div>
        <div class="container_right">
          <div>联系我们：</div>
          <img src="../../static/img/weCheatALL.jpg" />
          <img src="../../static/img/qrcode.png" />
          <img src="../../static/img/anzhuo.png" />
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style>
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
