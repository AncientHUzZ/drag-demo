import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import PageDesign from './views'
import oView from 'oview'

Vue.use(PageDesign)
Vue.use(oView)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vant)

new Vue({
	router,
	store,
	render: function (h) {
		return h(App)
	}
}).$mount('#app')
