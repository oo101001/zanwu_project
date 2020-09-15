import Vue from 'vue'
import Router from 'vue-router'
import "../assets/css/reset.css"
import "../assets/css/header.css"
import  Shop from  "../views/shop"
import Item from "../views/item"
import Cart from "../views/cart"
import Login from "../views/login"
import Checkout from "../views/checkout"
import Payment from  "../views/Payment"
import Account from "../views/account"
import HomeIndex from "../views/homeIndex"
import ConTactus from "../views/conTactus"
import ZanIntroduce from "../views/zanIntroduce"
import Welfare from "../views/welfare"
import NewsList from "../views/newsList"
import Order from '../views/account/order'
import Address from '../views/account/address'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"Shop",
      component: Shop
    },
    {
      path: '/welfare',
      name:"Welfare",
      component: Welfare
    },
    {
      path: '/newsList',
      name:"NewsList",
      component: NewsList
    },
    {
      path: '/item',
      name:"Item",
      component: Item
    },
    {
      path: '/zanIntroduce',
      name:"ZanIntroduce",
      component: ZanIntroduce
    },
    {
      path: '/homeIndex',
      name:"HomeIndex",
      component: HomeIndex
    },
    {
      path: '/conTactus',
      name:"ConTactus",
      component: ConTactus
    },
    {
      path: '/login',
      name:"Login",
      component: Login
    },
    {
      path: '/cart',
      name:"Cart",
      component: Cart
    },
    {
      path: '/checkout',
      name:"Checkout",
      component: Checkout
    },
    {
      path: '/payment',
      name:"Payment",
      component: Payment
    },
    {
      path: '/account',
      component: Account,
      children: [
        {
          path: '',
          name: 'Account',
          component: Order
        },
        {
          path: '/address',
          name: 'Address',
          component: Address
        }
      ]
    }
  ]
})
