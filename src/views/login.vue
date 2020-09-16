<template>
  <div id="login">
    <div id="bgd">
      <canvas id='myCanvas' :width='width' :height='height'>
      </canvas>
    </div>
    <div id="loginBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="1">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px">
            <el-form-item label="用户名" prop="userName" style="margin-top:40px;">
              <el-row>
                <el-col :span='22'>
                  <el-input class="inps" placeholder='用户名' v-model="loginForm.userName"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-row>
                <el-col :span='22'>
                  <el-input class="inps" placeholder='密码' v-model="loginForm.passWord"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item style="margin-top:20px; text-align: center !important;">
              <el-button type="primary" :loading="loading" round class="submitBtn" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="2">
          <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="80px">
            <el-form-item label="用户名" prop="userName" style="margin-top:40px;">
              <el-row>
                <el-col :span='22'>
                  <el-input class="inps" placeholder='用户名' v-model="registerForm.userName"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-row>
                <el-col :span='22'>
                  <el-input class="inps" placeholder='密码' v-model="registerForm.passWord"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="确认密码" prop="againpassWord">
              <el-row>
                <el-col :span='22'>
                  <el-input class="inps" placeholder='请确认密码' v-model="registerForm.againpassWord"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item style="margin-top:20px; text-align: center !important;">
              <el-button type="primary" round :loading="loading" class="submitBtn" @click="registersubmitForm('registerForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <!--    <h4>登录</h4> -->

    </div>
  </div>
</template>

<script>
  import {
    setCookie,
    getCookie,
    delCookie
  } from '../until/util.js'
  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"))
        } else {
          if (this.registerForm.againpassWord !== "") {
            this.$refs.registerForm.validateField("againpassWord");
          }
          callback()
        }
      }
      // <!--二次验证密码-->
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请确认输入密码"));
        } else if (value !== this.registerForm.passWord) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        activeName: '1',
        canvas: null,
        context: null,
        stars: [], //星星数组
        shadowColorList: [
          "#39f",
          "#ec5707",
          "#b031d4",
          "#22e6c7",
          "#92d819",
          "#14d7f1",
          "#e23c66"
        ], //阴影颜色列表
        directionList: ["leftTop", "leftBottom", "rightTop", "rightBottom"], //星星运行方向
        speed: 50, //星星运行速度
        last_star_created_time: new Date(), //上次重绘星星时间
        Ball: class Ball {
          constructor(radius) {
            this.x = 0;
            this.y = 0;
            this.radius = radius;
            this.color = "";
            this.shadowColor = "";
            this.direction = "";
          }

          draw(context) {
            context.save();
            context.translate(this.x, this.y);
            context.lineWidth = this.lineWidth;
            var my_gradient = context.createLinearGradient(0, 0, 0, 8);
            my_gradient.addColorStop(0, this.color);
            my_gradient.addColorStop(1, this.shadowColor);
            context.fillStyle = my_gradient;
            context.beginPath();
            context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
            context.closePath();

            context.shadowColor = this.shadowColor;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 10;

            context.fill();
            context.restore();
          }
        }, //工厂模式定义Ball类
        width: window.innerWidth,
        height: window.innerHeight,
        getUserName: '',
        getPassWord: '',
        loginForm: {
          userName: "",
          passWord: ""
        },
        registerForm: {
          userName: "",
          passWord: "",
          againpassWord: ''
        },
        loginRules: {
          userName: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          passWord: [{
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }]
        },
        registerRules: {
          userName: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          passWord: [{
            required: true,
            validator: validatePass,
            // message: "请输入密码",
            trigger: "blur"
          }],
          againpassWord: [{
            required: true,
            validator: validatePass2,
            // message: "请确认密码",
            trigger: "blur"
          }]
        }
      };
    },
    methods: {
      handleClick() {},
      //提交登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.getUserName = window.localStorage.getItem("userName");
          this.getPassWord = window.localStorage.getItem("passWord");
          if (valid) {

            if (this.getUserName && this.getPassWord) {
              if (this.loginForm.userName !== this.getUserName) {
                this.$message.error('用户名错误');
              } else if (this.loginForm.passWord !== this.getPassWord) {
                this.$message.error('密码错误');
              } else {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
                this.$router.push({
                  path: '/'
                })
              }
            } else {
              this.$message.error('您是未注册用户,请您注册用户');
            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      registersubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.getUserName = window.localStorage.getItem("userName");
          this.getPassWord = window.localStorage.getItem("passWord");
          if (this.getUserName && this.getPassWord) {
            this.$message({
              message: '你已注册过该用户,请登录',
              type: 'warning'
            });
          } else {
            if (valid) {
              window.localStorage.setItem("userName", this.registerForm.userName);
              window.localStorage.setItem("passWord", this.registerForm.passWord);
              this.$message({
                message: '注册成功，请登录',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          }
        });
      },
      //重复动画
      drawFrame() {
        let animation = requestAnimationFrame(this.drawFrame);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.createStar(false);
        this.stars.forEach(this.moveStar);
      },
      //展示所有的星星
      createStar(params) {
        let now = new Date();
        if (params) {
          //初始化星星
          for (var i = 0; i < 50; i++) {
            const radius = Math.random() * 3 + 2;
            let star = new this.Ball(radius);
            star.x = Math.random() * this.canvas.width + 1;
            star.y = Math.random() * this.canvas.height + 1;
            star.color = "#ffffff";
            star.shadowColor = this.shadowColorList[
              Math.floor(Math.random() * this.shadowColorList.length)
            ];
            star.direction = this.directionList[
              Math.floor(Math.random() * this.directionList.length)
            ];
            this.stars.push(star);
          }
        } else if (!params && now - this.last_star_created_time > 3000) {
          //每隔3秒重绘修改颜色其中30个球阴影颜色
          for (var i = 0; i < 30; i++) {
            this.stars[i].shadowColor = this.shadowColorList[
              Math.floor(Math.random() * this.shadowColorList.length)
            ];
          }
          this.last_star_created_time = now;
        }
      },
      //移动
      moveStar(star, index) {
        if (star.y - this.canvas.height > 0) {
          //触底
          if (Math.floor(Math.random() * 2) === 1) {
            star.direction = "leftTop";
          } else {
            star.direction = "rightTop";
          }
        } else if (star.y < 2) {
          //触顶
          if (Math.floor(Math.random() * 2) === 1) {
            star.direction = "rightBottom";
          } else {
            star.direction = "leftBottom";
          }
        } else if (star.x < 2) {
          //左边
          if (Math.floor(Math.random() * 2) === 1) {
            star.direction = "rightTop";
          } else {
            star.direction = "rightBottom";
          }
        } else if (star.x - this.canvas.width > 0) {
          //右边
          if (Math.floor(Math.random() * 2) === 1) {
            star.direction = "leftBottom";
          } else {
            star.direction = "leftTop";
          }
        }
        if (star.direction === "leftTop") {
          star.y -= star.radius / this.speed;
          star.x -= star.radius / this.speed;
        } else if (star.direction === "rightBottom") {
          star.y += star.radius / this.speed;
          star.x += star.radius / this.speed;
        } else if (star.direction === "leftBottom") {
          star.y += star.radius / this.speed;
          star.x -= star.radius / this.speed;
        } else if (star.direction === "rightTop") {
          star.y -= star.radius / this.speed;
          star.x += star.radius / this.speed;
        }
        star.draw(this.context);
      }
    },
    mounted() {
      this.canvas = document.getElementById("myCanvas");
      this.context = this.canvas.getContext("2d");

      this.createStar(true);
      this.drawFrame();
    }
  };
</script>

<style scoped>
  #login {
    width: 100vw;
    padding: 0;
    margin: 0;
    height: 100vh;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: left top;
    background-color: #242645;
    color: #fff;
    font-family: "Source Sans Pro";
    background-size: 100%;
    position: relative;
  }

  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .iconfont {
    color: #fff;
  }

  .submitBtn {
    color: #F0F7FF;
    width: 200px;
    margin-left: -80px !important;
  }

  #loginBox {
    width: 500px;
    height: 320px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%);
  }

  #loginBox /deep/ .inps input {
    color: #fff;
    background-color: transparent;
    font-size: 12px;
  }
</style>
<style>
  .el-tabs__item {
    color: #FFFFFF !important;
  }

  .el-form-item__label {
    color: #FFFFFF !important;
  }
</style>
