<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo">
          <router-link :to="{ path: '/homeIndex' }"></router-link>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd><span class="ng-scope"></span></dd>
                </dl>
                <ul>
                  <li class="order">
                    <router-link :to="{ path: '/cart' }">现在结算</router-link>
                  </li>
                  <li class="information">
                    <a href="javascript:;">账户资料</a>
                  </li>
                  <li class="address">
                    <router-link :to="{ path: '/address' }">收货地址</router-link>
                  </li>
                  <li class="logout" ><router-link :to="{ path: '/login' }">退出</router-link></li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <car-panel></car-panel>
        </ul>
      </div>
    </div>
    <div class="nav-sub" :class="{'fix-nav': navBarFixed}">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <li>
              <router-link :to="{ path: '/homeIndex' }">首页</router-link>
            </li>
            <li><router-link :to="{ path: '/zanIntroduce' }">赞物介绍</router-link></li>
            <li><router-link :to="{ path: '/welfare' }">公益活动</router-link></li>
         <!--   <li class="active">
              <router-link :to="{ path: '/' }">官方商品</router-link>
            </li> -->

            <li><router-link :to="{ path: '/newsList' }">新闻中心</router-link></li>
            <li> <router-link :to="{ path: '/conTactus' }">联系我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CarPanel from "./car-panel";
  export default {
   data() {
            return {
              navBarFixed: false,
            };
          },
    //默认暴露一个模块
    components: {
      CarPanel
    },
     mounted() {
              // 事件监听滚动条
              window.addEventListener("scroll", this.watchScroll);
            },

            destroyed() {
              // 移除事件监听
              window.removeEventListener("scroll", this.watchScroll);
            },

    methods:{
    }
  };
</script>

<style>
</style>
