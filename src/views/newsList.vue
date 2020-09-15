<template>
  <div id="main">
    <header-nav></header-nav>
    <div class="newList" v-for="item in dataList" @click="toDetail(item)">
      <div class="iamgeleft">
        <img :src=" item.imageUrl" alt="">
      </div>
      <div class="imageright">
        <div class="title">{{ item.title }}</div>
        <div class="title_mes">{{ item.contentInfo }}</div>
      </div>
    </div>
    <el-dialog title="新闻详情" :visible.sync="dialogVisible" width="55%">
      <div class="imgName">
        <div class="image_title">
          {{loadingList.title}}
        </div>
        <div class="imagDiv"> <img :src="loadingList.imageUrl" alt=""></div>
        <div class="image">
          {{loadingList.contentInfo }}
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderNav from "../components/header-nav.vue";
  import Footer from "../components/footer.vue"
  export default {
    data() {
      return {
        dialogVisible: false,
        dataList: [{
            id: 1,
            title: '正宗火锅美食不能错过呦',
            contentInfo: '爱神的箭爱看大家安利的卡里的萨拉大阿萨德大大大大阿萨达大奥所多',
            imageUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3596024806,1504590179&fm=26&gp=0.jpg'
          },
          {
            id: 2,
            title: '牛肚，色泽光鲜，口感劲道',
            contentInfo: '爱神的箭爱看大家安利的卡里的萨拉大阿萨德大大大大阿萨达大奥所多',
            imageUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1460509702,215895766&fm=26&gp=0.jpg'
          },
          {
            id: 3,
            title: '你好啊阿萨达就爱看登记卡卡了迪卡龙卡开始打开排列三扩大到',
            contentInfo: '爱神的箭爱看大家安利的卡里的萨拉大阿萨德大大大大阿萨达大奥所多',
            imageUrl: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881637059,961785625&fm=26&gp=0.jpg'
          },
          {
            id: 4,
            title: '梭子蟹正宗的味道',
            contentInfo: '爱神的箭爱看大家安利的卡里的萨拉大阿萨德大大大大阿萨达大奥所多',
            imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=353026291,3989303547&fm=26&gp=0.jpg'
          },
          {
            id: 5,
            title: '烧鸡,一份不能不吃的美食',
            contentInfo: '爱神的箭爱看大家安利的卡里的萨拉大阿萨德大大大大阿萨达大奥所多',
            imageUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2704994257,3701416066&fm=26&gp=0.jpg'
          }
        ],
        loadingList: ''
      }
    },
    components: {
      HeaderNav,
      Footer
    },
    methods: {
      toDetail(row) {
        this.loadingList = row
        this.dialogVisible = true
      }
    }
  }
</script>

<style>
  .newList {
    width: 1220px;
    min-height: 212px;
    background: #FFFFFF;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    border-radius: 12px;
    margin-bottom: 40px;

  }

  .iamgeleft {
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iamgeleft img {
    display: block;
    width: 280px;
    height: 168px;
  }

  .imageright {
    width: 500px;
    margin-left: 20px;
    height: 200px;
  }

  .title {
    width: 500px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    font-size: 26px;
    margin-top: 20px;
    color: #000000;
  }

  .title_mes {
    width: 500px;
    height: 100px;
    white-space: nowrap;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 20px;
  }

  .imgName {
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .imagDiv {
    display: flex;
    justify-content: center;
  }

  .imgName img {
    width: 280px;
    height: 150px;

  }

  .image_title {
    margin-bottom: 10px;
    font-size: 24px;
  }

  .image {
    font-size: 18px;
    max-height: 200px;
    overflow-y: scroll;
    margin-top: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }

  .el-dialog {
    border-radius: 25px;
  }
</style>
