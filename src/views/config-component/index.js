import YmfSwipeConfig from './ymf-swipe-config'
import YmfImageConfig from './ymf-image-config'
import YmfTableConfig from  './ymf-table-config'
import YmfCellGroupConfig from './ymf-cell-group-config'
import YmfCellConfig from './ymf-cell-config'
import YmfDividerConfig from './ymf-divider-config'
import YmfFlexBoxConfig from './ymf-flexbox-config'
import YmfFormConfig from './ymf-form-config'
import YmfFieldConfig from './ymf-field-config'
import YmfStepperConfig from './ymf-stepper-config'
import YmfCalenderConfig from './ymf-calender-config'
import YmfSwitchConfig from './ymf-switch-config'
import YmfPickerConfig from './ymf-picker-config'
import YmfRadioConfig from './ymf-radio-config'
import YmfCheckboxConfig from './ymf-checkbox-config'

const components = [
	YmfSwipeConfig,
	YmfImageConfig,
	YmfTableConfig,
	YmfCellGroupConfig,
	YmfCellConfig,
	YmfDividerConfig,
	YmfFlexBoxConfig,
	YmfFormConfig,
	YmfFieldConfig,
	YmfStepperConfig,
	YmfCalenderConfig,
	YmfSwitchConfig,
	YmfPickerConfig,
	YmfRadioConfig,
	YmfCheckboxConfig
]

export default {
	install(Vue){
		components.map(component => {
			Vue.component(component.name,component)
		})
	}
}