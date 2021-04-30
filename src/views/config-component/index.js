import YmfSwipeConfig from './ymf-swipe-config'

const components = [
	YmfSwipeConfig
]

export default {
	install(Vue){
		components.map(component => {
			Vue.component(component.name,component)
		})
	}
}