import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e662d73 = () => interopDefault(import('..\\pages\\Sample1.vue' /* webpackChunkName: "pages_Sample1" */))
const _1e7444f4 = () => interopDefault(import('..\\pages\\Sample2.vue' /* webpackChunkName: "pages_Sample2" */))
const _601b0e1e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Sample1",
    component: _1e662d73,
    name: "Sample1"
  }, {
    path: "/Sample2",
    component: _1e7444f4,
    name: "Sample2"
  }, {
    path: "/",
    component: _601b0e1e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
