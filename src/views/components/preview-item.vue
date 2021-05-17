<template>
    <div>
        <!-- 输入框 -->
        <van-field v-if="page.type==='field'"
                   v-model="page.value"
                   :label="page.title" :placeholder="page.placeholder" :clearable="page.clearable"
                   maxlength="200" :disabled="page.disabled" :readonly="page.readonly"
                   :show-word-limit="page.showWordLimit"  :type="page.fieldType"
        />
        <!-- 计数器 -->
        <van-field v-if="page.type==='stepper'"
                   name="stepper" :label="page.title">
            <template #input>
                <van-stepper v-model="page.value"
                             :min="page.min"
                             :max="page.max"
                             :step="page.step"
                             :input-width="page.inputWidth"
                             :button-size="page.buttonSize"
                             :integer="page.integer"
                             :disabled="page.disabled"
                             :disable-plus="page.disabledPlus"
                             :disable-minus="page.disabledMinus"
                             :disable-input="page.disabledInput"
                />
            </template>
        </van-field>
        <!-- 日历 -->
        <van-field v-if="page.type==='calender'"
                   readonly clickable
                   name="calendar"
                   :value="page.value"
                   :label="page.title"
                   :placeholder="page.placeholder"
                   @click="page.showCalendar = true"
        />
        <!--                        <van-calendar v-if="page.type==='calender'" v-model="page.showCalendar"-->
        <!--                                      :type="page.calenderType"-->
        <!--                                      :min-date="new Date(page.minDate)"-->
        <!--                                      :max-date="new Date(page.maxDate)"-->
        <!--                                      :default-date="new Date(page.defaultDate)"-->
        <!--                                      @confirm="onCalenderConfirm($event,page)" />-->

        <!-- 开关 -->
        <van-field name="switch" :label="page.title" v-if="page.type==='switch'">
            <template #input>
                <span style="margin-right: 10px" :class="{ 'active':page.value === page.inactiveValue }">{{ page.options[0].label }}</span>
                <van-switch v-model="page.value"
                            :size="page.size"
                            :disabled="page.disabled"
                            :active-value="page.activeValue"
                            :inactive-value="page.inactiveValue"
                            @change="changeLinkage($event,page)"
                />
                <span style="margin-left: 10px" :class="{ 'active':page.value === page.activeValue }">{{ page.options[1].label }}</span>
            </template>
        </van-field>
        <!-- 选择器 -->
        <van-field name="picker" :label="page.title" v-if="page.type === 'picker'"
                   readonly
                   clickable
                   :value="page.value"
                   :placeholder="page.placeholder"
                   @click="page.showPicker = true"
        />
        <van-popup v-model="page.showPicker" position="bottom" v-if="page.type === 'picker'">
            <van-picker show-toolbar
                        :columns="checkPickOptions(page.options)"
                        @confirm="onPickerConfirm($event,page)"
                        @cancel="page.showPicker = false"
            />
        </van-popup>
        <!-- 单选框 -->
        <van-field name="radio" :label="page.title" v-if="page.type === 'radio'">
            <template #input>
                <van-radio-group v-model="page.value" :direction="page.direction" @change="changeLinkage($event,page)"
                                 :disabled="page.disabled" :icon-size="page.iconSize">
                    <van-radio v-for="(item, rIndex) in page.options" :key="rIndex"
                               :name="item.value">{{ item.label }}</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <!-- 复选框 -->
        <van-field name="checkboxGroup" :label="page.title" v-if="page.type === 'checkbox'">
            <template #input>
                <van-checkbox-group v-model="page.value"
                                    :direction="page.direction"
                                    :disabled="page.disabled"
                                    :icon-size="page.iconSize"
                                    :max="page.max"
                >
                    <van-checkbox v-for="(item, cIndex) in page.options" :key="cIndex"
                                  :name="item.value"
                                  shape="square">{{ item.label }}</van-checkbox>
                </van-checkbox-group>
            </template>
        </van-field>
        <!-- 分割线 -->
        <div v-if="page.type === 'divider'">
            <van-divider :style="{borderColor: '#cccccc'}" v-if="page.content"
                         :dashed="page.dashed" :content-position="page.contentPosition">
                {{ page.content }}
            </van-divider>
            <van-divider :dashed="page.dashed" :style="{borderColor: '#cccccc'}" v-else/>
        </div>
        <!-- 轮播图 -->
        <van-swipe  v-if="page.type === 'swipe'"
                    :autoplay="page.autoplay"
                    :vertical="page.vertical"
                    :loop="page.loop"
                    :show-indicators="page.showIndicators"
                    :height="page.height"
                    :style="{ height: page.height+'px' }"
        >
            <van-swipe-item v-for="(item, sIndex) in page.list" :key="sIndex">
                <van-image
                        :height="page.height"
                        :src="item.image"
                        fit="fill"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 图片 -->
        <van-image v-if="page.type === 'image'"
                   :width="page.width"
                   :height="page.height"
                   fit="fill"
                   :src="page.url"
                   :round="page.round"
        />
        <!-- 表格 -->
        <table  v-if="page.type === 'table'"
                style="width: 100%" class="gridtable">
            <tr>
                <th v-for="(item, tIndex) in page.theadData" :key="tIndex">
                    {{ item.label }}
                </th>
            <tr/>
            <tr v-for="(item, index) in page.tdData" :key="index">
                <td v-for="(td, tIndex) in item.source" :key="tIndex" style="text-align: center">
                    {{td.label}}
                </td>
            </tr>
        </table>
        <!-- 文本展示组 -->
        <van-cell-group v-if="page.type === 'cell-group'"
                        :title="page.title"
                        :border="page.border">
            <van-cell  v-for="(item, cgIndex) in page.itemDataSourceList" :key="cgIndex"
                       :title="item.title"
                       :value="item.value"
                       :label="item.subTitle"
            />
        </van-cell-group>
        <!-- 文本 -->
        <van-cell v-if="page.type === 'cell'"
                  :title="page.title"
                  :value="page.value"
                  :label="page.subTitle" />
        <!-- 柱状图 -->
        <histogram-chart v-if="page.type === 'histogram'" :key="refreshKey + 'histogram' + Math.floor(Math.random()*10000)"
                         :source="page"></histogram-chart>
        <!-- 饼状图 -->
        <pie-chart v-if="page.type === 'pie'" :key="refreshKey + 'pie' + Math.floor(Math.random()*10000)"
                   :source="page"></pie-chart>
        <!-- 折线图 -->
        <line-chart v-if="page.type === 'line'" :key="refreshKey+ 'line' + Math.floor(Math.random()*10000)"
                    :source="page"></line-chart>
    </div>
</template>

<script>
	import PieChart from '../page-component/ymf-pie'
	import HistogramChart from '../page-component/ymf-histogram'
	import LineChart from '../page-component/ymf-line'
	export default {
		name: "preview-item",
		components: {
			PieChart,
			HistogramChart,
			LineChart,
		},
		props: {
			source: {
			    required: true
            },
			page: {
				type: Object,
				required: true
			},
			refreshKey: {
				type: Number,
				required: true,
				default: new Date().getTime()
			}
		},
        methods: {
			formatSingleDate(date) {
				return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			},
			onCalenderConfirm(date, page) {
				page.showCalendar = false
				if (date) {
					page.value = this.formatSingleDate(date)
				}
			},
			//选择器确认选择
			onPickerConfirm(value, page) {
				page.value = value
				page.showPicker = false
                let option = page.options.find(item => item.label === value)
                this.changeLinkage(option.value,page)
			},
			//选择器下拉选项配置
			checkPickOptions(columns) {
				let options = []
				columns.forEach(item => {
					options.push(item.label)
				})
				return options
			},
			changeLinkage(val, currentItem) {
				if (!currentItem.isLinkage) { //没有联动属性
					return
                }
				let type = currentItem.type
                if  (type === 'switch') { //当前为开关组件，联动其他组件
                	let optionIndex = 0
                    if (val === currentItem.activeValue) {
                    	optionIndex = 1
                    }
                    let linkageList = currentItem.options[optionIndex].linkage
                    this.changeOptions(linkageList)

                } else {
                	let optionIndex = currentItem.options.findIndex(option => option.value === val)
					let linkageList = currentItem.options[optionIndex].linkage
                    this.changeOptions(linkageList)
                }
				// console.log(this.source)
				// console.log(val)
				// console.log(currentItem)
            },
            changeOptions(linkageList) {
				// console.log(linkageList)
				if (linkageList.length > 0)  {
					linkageList.forEach((link) => {
						let linkUuid = link.uuid
						this.source.pages.forEach((page) => {
							if (linkUuid === page.uuid) {
								page.options = link.options
                                if (page.type === 'switch') {
                                	page.inactiveValue = link.options[0].value
                                    page.activeValue = link.options[1].value
                                }
								if (page.type === 'checkbox') { //联动组件为复选框时清空复选框默认值
									page.value = []
								} else {
									page.value = ''
                                }
								page.options.forEach(option =>  {
									if (option.isDefault) {
										if(page.type === 'picker') {
											page.value = option.label
                                        } else if (page.type === 'checkbox') {
											page.value.push(option.value)
                                        } else {
											page.value = option.value
                                        }
									}
								})
							}
						})
					})
				}
            }

        }
	}
</script>

<style lang="less" scoped>
    @import "../../../src/views/common/index.css";
    .flex-basic {
        width: 100%;
        min-height: 100px;
    }
    /deep/ .van-divider {
        margin: 4px 0;
        background-color: #F5F5F5;
    }
    .active {
        color: #1989fa;
    }
</style>