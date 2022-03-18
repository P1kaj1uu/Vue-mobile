import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

// 一次性导入vant组件库
import Vant from 'vant'
// 定制样式主题.less
import 'vant/lib/index.less'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import zh from 'dayjs/locale/zh-cn.js'

dayjs.extend(relativeTime)
dayjs.locale(zh)

Vue.use(Vant)
Vue.filter('dateFormat', function (dt) {
  return dayjs().to(dt)
})

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
