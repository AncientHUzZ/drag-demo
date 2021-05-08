import YmfSwipeConfig from './ymf-swipe-config'
import YmfImageConfig from './ymf-image-config'
import YmfTableConfig from  './ymf-table-config'
import YmfCellGroupConfig from './ymf-cell-group-config'
import YmfCellConfig from './ymf-cell-config'
import YmfDividerConfig from './ymf-divider-config'
import YmfFlexBoxConfig from './ymf-flexbox-config'
import YmfFormConfig from './ymf-form-config'

const components = [
	YmfSwipeConfig,
	YmfImageConfig,
	YmfTableConfig,
	YmfCellGroupConfig,
	YmfCellConfig,
	YmfDividerConfig,
	YmfFlexBoxConfig,
	YmfFormConfig
]

export default {
	install(Vue){
		components.map(component => {
			Vue.component(component.name,component)
		})
	}
}