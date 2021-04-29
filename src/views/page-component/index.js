import YmfSwipe from './ymf-swipe'
import YmfFlexbox from './ymf-flexbox'
import YmfImage from './ymf-image'
import YmfCell from './ymf-cell'
import YmfCellGroup from './ymf-cell-group'
import YmfTable from './ymf-table'
import YmfDivider from './ymf-divider'
import YmfForm from './ymf-form'
import YmfField from './ymf-field'
import YmfStepper from './ymf-stepper'
import YmfCalender from './ymf-calender'
import YmfSwitch from './ymf-switch'
import YmfPicker from './ymf-picker'
import YmfRadio from './ymf-radio'
import YmfCheckBox from './ymf-checkbox'

const components = [
	YmfSwipe,
	YmfFlexbox,
	YmfImage,
	YmfCell,
	YmfCellGroup,
	YmfTable,
	YmfDivider,
	YmfForm,
	YmfField,
	YmfStepper,
	YmfCalender,
	YmfSwitch,
	YmfPicker,
	YmfRadio,
	YmfCheckBox,
]



export default {
	install(Vue){
		components.map(component => {
			Vue.component(component.name,component)
		})
	}
}