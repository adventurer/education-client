import Vue from 'vue'
import App from './App'

import pageHead from './pages/component/page-head.vue'
Vue.component('pageHead', pageHead)

import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
Vue.component('faIcon', faIcon)

import home from './pages/home/index.vue'
Vue.component('home',home)

import community from './pages/community/index.vue'
Vue.component('community',community)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



