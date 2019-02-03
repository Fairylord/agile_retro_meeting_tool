// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 如果组件export的时候声明了name,name可以这样直接注册组件，不需要components:{name:{tempalte: component}}
  components: { App },
  // 会用名字为App的组件替换掉index.html中id为app的元素
  template: '<App/>'
})