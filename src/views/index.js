import Page from './page-component'
import Config from './config-component'

export default {
	install(Vue) {
		Vue.use(Page)
		Vue.use(Config)
	}
}