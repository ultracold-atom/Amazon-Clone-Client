import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a97f634 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _28da77b0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _16396d11 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _49e0656d = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _0257752e = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _0566d42f = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _68bf4351 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _1d3362a0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _0563bbc0 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _93237796 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _ccb75b04 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _7c44ec87 = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _4c91c9fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _3a97f634,
    name: "address"
  }, {
    path: "/cart",
    component: _28da77b0,
    name: "cart"
  }, {
    path: "/login",
    component: _16396d11,
    name: "login"
  }, {
    path: "/orders",
    component: _49e0656d,
    name: "orders"
  }, {
    path: "/payment",
    component: _0257752e,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _0566d42f,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _68bf4351,
    name: "profile"
  }, {
    path: "/search",
    component: _1d3362a0,
    name: "search"
  }, {
    path: "/signup",
    component: _0563bbc0,
    name: "signup"
  }, {
    path: "/address/add",
    component: _93237796,
    name: "address-add"
  }, {
    path: "/products/:id?",
    component: _ccb75b04,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _7c44ec87,
    name: "reviews-id"
  }, {
    path: "/",
    component: _4c91c9fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
