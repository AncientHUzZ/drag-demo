import YmfSwipeConfig from './ymf-swipe-config'
import YmfImageConfig from './ymf-image-config'
import YmfTableConfig from  './ymf-table-config'

const components = [
	YmfSwipeConfig,
	YmfImageConfig,
	YmfTableConfig
]

export default {
	install(Vue){
		components.map(component => {
			Vue.component(component.name,component)
		})
	}
}