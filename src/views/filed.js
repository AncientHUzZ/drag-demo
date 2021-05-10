/**
 * 可拖拽组件数据列表
 */
import fa from "element-ui/src/locale/lang/fa";

export default [
	{
		title: '数据展示组件',
		list: [
			{
				uuid: '',
				type: 'swipe', //组件类型
				title: '轮播图', //组件名称
				list: [ //组件数据源
					{
						title: '示例图片1',
						image: 'https://pic2.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b'
					},
					{
						title: '示例图片1',
						image: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
					}
				],
				vertical: false, //是否为纵向滚动
				showIndicators: true, //是否显示指示器
				loop: true, // 是否循环
				autoplay: 3000,// 自动轮播间隔
				duration: 300, //切换动画时间
				height: '180' //高度值
			},
			{
				uuid: '',
				type: 'image',
				title: '图片',
				url: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg', // 最终加载的图片地址
				width: '', //宽度
				height: '', //高度
				round: false, //是否显示为圆形
			},
			{
				uuid: '',
				type: 'table',
				title: '表格',
				thead: true, //是否显示表头
				theadData: ['示例1','示例2'], //表头数据源
				tdData: [ //表格内容 默认2*2
					{
						source: ['示例1-1', '示例1-2'],
					},
					{
						source: ['示例2-1', '示例2-2']
					}
				]
			},
			{
				uuid: '',
				type: 'cell-group',
				title: '文本展示组', //分组标题
				border: true, // 是否显示外边框
				itemDataSourceList:[
					{
						uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
						type: 'cell',
						title: '文本展示1', //左侧标题
						value: '示例文字1', //展示数据
						subTitle: '说明文本1', //标题下方的描述信息
						icon: '', //左侧图标名称
					}
				]
			},
			{
				uuid: '',
				type: 'cell',
				title: '文本展示', //左侧标题
				value: '示例文字', //展示数据
				subTitle: '说明文本', //标题下方的描述信息
				icon: '', //左侧图标名称
			}
		]
	},
	{
		title: '布局组件',
		list: [
			{
				uuid: '',
				type: 'divider',
				title: '分割线',
				content: '分割线', //分割线内容
				dashed: false, //是否使用虚线
				contentPosition: 'center', //内容位置，可选值为left right
			},
			{
				uuid: '',
				type: 'flexbox',
				title: '格栅布局',
				gutter: '0', //默认间隙像素大小
				justify:'start', //对齐方式 可选值为 end center space-around space-between
				itemDataSourceList: [ //列数和数据 默认1列
					{
						uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
						type: 'flex',
						pages: []
					},
				]
			},
			{
				uuid: '',
				type: 'form',
				title: '表单区域',
				labelWidth: '100',// 表单项 label 宽度
				labelAlign: 'left',// 表单项 label 对齐方式 可选值为 center right
				inputAlign: 'left', //输入框对齐方式 可选值为 center right
				colon: false, //是否在 label 后面添加冒号
				itemDataSource: {
					uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
					type: 'form',
					pages: []
				}
			}
		]
	},
	{
		title: '表单组件',
		list: [
			{
				uuid: '',
				type: 'field',
				title: '输入框',
				value: '', //绑定值
				fieldType: 'text', // 输入框类型, 可选值为 number textarea password
				placeholder: '请输入文本', // 输入框占位提示文字
				clearable: false, // 是否显示清除图标
				maxlength: 200, // 最大输入字符
				disabled: false, //是否禁用输入框
				readonly: false, //是否只读
				showWordLimit: false //是否显示字数统计
			},
			{
				uuid: '',
				type: 'stepper',
				title: '计数器',
				value: 0, //绑定值默认0
				min: -100, // 最小值
				max: 100, // 最大值
				step: 1, //步长
				inputWidth: '32', //输入框宽度 px
				buttonSize: '18', //按钮大小以及输入框高度 px
				integer: true, // 是否只允许输入整数
				disabled: false, // 是否禁用步进器
				disabledPlus: false, //是否禁用增加按钮
				disabledMinus: false, //是否禁用减少按钮
				disabledInput: false, //是否禁用输入框
			},
			{
				uuid: '',
				type: 'calender',
				title: '日历',
				calenderType: 'single', //选择类型  single表示选择单个日期， multiple表示选择多个日期， range表示选择日期区间
				value: '', // 绑定值
				minDate: new Date('1970-01-01'),// 最小日期
				maxDate: new Date('2050-01-01'),// 最大日期
				defaultDate: new Date(), //默认选中日期
				placeholder: '点击选择日期'
			},
			{
				uuid: '',
				type: 'switch',
				title: '开关',
				value: false, //绑定值 只支持true和false
				disabled: false, //是否为禁用状态
				size: '20', // 开关尺寸，默认单位为px
				activeValue: true, //打开时对应的值
				inactiveValue: false //关闭时对应的值
			},
			{
				uuid: '',
				type: 'picker',
				title: '选择器',
				value: '', //绑定值
				cancelText: '取消', //弹窗的取消文字
				confirmText: '确认', //弹窗的确认文字
				placeholder: '请选择....', // 占位符
				options: [            //下拉选择数据源
					{
						label: '选项一',
						value: 1
					},
					{
						label: '选项二',
						value: 2
					}
				]
			},
			{
				uuid: '',
				type: 'radio',
				title: '单选框',
				value: '', //绑定值
				options: [ // 选项列表
					{
						label: '示例选项1',
						value: '1'
					},
					{
						label: '示例选项2',
						value: '2'
					},
				],
				disabled: false, //是否禁用
				direction: 'horizontal', //摆放方向 vertical
				iconSize: '20', //所有复选框的图标大小，默认单位为 px
			},
			{
				uuid: '',
				type: 'checkbox',
				title: '复选框',
				value: [],
				disabled: false, //是否禁用所有复选框
				max: 0, //最大可选数，0为无限制
				iconSize: '20', //所有复选框的图标大小，默认单位为 px
				options: [
					{
						label: '示例选项1',
						value: '1'
					},
					{
						label: '示例选项2',
						value: '2'
					}
				],
				direction: 'horizontal' //摆放方向 vertical
			}
		]
	}
]