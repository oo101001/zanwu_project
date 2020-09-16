// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
// router.beforeEach(function(to, from, next) {
//   if (to.meta.needLogin) {
//     let getUserName = window.localStorage.getItem("userName");
//     let getPassWord = window.localStorage.getItem("passWord");
//     //页面是否登录
//     console.log(getUserName)
//       console.log(getPassWord)
//     if (getUserName !== null && getPassWord !== null) {
//       //本地存储中是否有token(uid)数据
//       next({
//         name: "HomeIndex"
//       }); //表示已经登录
//     } else {
//       //next可以传递一个路由对象作为参数 表示需要跳转到的页面
//       next({
//         name: "Login"
//       });
//     }
//   } else {
//     //表示不需要登录
//     next(); //继续往后走
//   }
// });

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
})
