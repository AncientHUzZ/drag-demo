<template>
    <el-dialog title="预览" :visible.sync="previewFlag" fullscreen :before-close="closeShow">
        <div style="width: 80%;margin: 0 auto">
            <div class="html-edit-area">
                <div class="top-nav">
                    <el-image :src="phone" style="width: 100%;" fit="cover"></el-image>
                </div>
                <div class="view-content">
                    <template v-for="(page, index) in source.pages">
                        <!-- 输入框 -->
                        <van-field v-if="page.type==='field'" :key="index"
                                   v-model="page.value"
                                   :label="page.title" :placeholder="page.placeholder" :clearable="page.clearable"
                                   maxlength="200" :disabled="page.disabled" :readonly="page.readonly"
                                   :show-word-limit="page.showWordLimit"  :type="page.fieldType"
                        />
                        <!-- 计数器 -->
                        <van-field v-if="page.type==='stepper'" :key="index"
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
                        <van-field v-if="page.type==='calender'" :key="index"
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
                        <van-field name="switch" :label="page.title" v-if="page.type==='switch'" :key="index">
                            <template #input>
                                <van-switch v-model="page.value"
                                            :size="page.size"
                                            :disabled="page.disabled"
                                            :active-value="page.activeValue"
                                            :inactive-value="page.inactiveValue"/>
                            </template>
                        </van-field>
                        <!-- 选择器 -->
                        <van-field name="picker" :label="page.title" v-if="page.type === 'picker'" :key="index"
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
                        <van-field name="radio" :label="page.title" v-if="page.type === 'radio'" :key="index">
                            <template #input>
                                <van-radio-group v-model="page.value" :direction="page.direction"
                                                 :disabled="page.disabled" :icon-size="page.iconSize">
                                    <van-radio v-for="(item, rIndex) in page.options" :key="rIndex"
                                               :name="item.value">{{ item.label }}</van-radio>
                                </van-radio-group>
                            </template>
                        </van-field>
                        <!-- 复选框 -->
                        <van-field name="checkboxGroup" :label="page.title" v-if="page.type === 'checkbox'" :key="index">
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
                        <div v-if="page.type === 'divider'" :key="index">
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
                                    :key="index"
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
                        <van-image v-if="page.type === 'image'"  :key="index"
                                :width="page.width"
                                :height="page.height"
                                fit="fill"
                                :src="page.url"
                                :round="page.round"
                        />
                        <!-- 表格 -->
                        <table  v-if="page.type === 'table'" :key="index"
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
                        <van-cell-group v-if="page.type === 'cell-group'" :key="index"
                                :title="page.title"
                                :border="page.border">
                            <van-cell  v-for="(item, cgIndex) in page.itemDataSourceList" :key="cgIndex"
                                       :title="item.title"
                                       :value="item.value"
                                       :label="item.subTitle"
                            />
                        </van-cell-group>
                        <!-- 文本 -->
                        <van-cell v-if="page.type === 'cell'" :key="index"
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
                    </template>
                </div>
            </div>
        </div>
        <div slot="footer">
            <el-button @click="closeShow">关 闭</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import PieChart from './page-component/ymf-pie'
    import HistogramChart from './page-component/ymf-histogram'
    import LineChart from './page-component/ymf-line'
	export default {
		name: "drag-preview-index",
        components: {
			PieChart,
			HistogramChart,
			LineChart
        },
		data() {
			return {
				phone: require('../assets/phoneTopNav.png'),
                source: null,
			}
		},
		props: {
			pageSource: {
				type: Object,
				required: true
			},
			previewFlag: {
				type: Boolean,
				required: true,
				default: false
			},
			refreshKey: {
				type: Number,
				required: true,
                default: new Date().getTime()
            }
		},
        created() {
			this.source = JSON.parse(JSON.stringify(this.pageSource))
		},
		watch: {
			pageSource: {
				deep: true,
                handler: function (newVal) {
					this.source = JSON.parse(JSON.stringify(newVal))
				}
            }
        },
		methods: {
			formatSingleDate(date) {
				return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			},
			closeShow() {
				this.$emit('close')
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
            },
            //选择器下拉选项配置
			checkPickOptions(columns) {
				let options = []
				columns.forEach(item => {
					options.push(item.label)
				})
				return options
            },
        }
	}
</script>

<style lang="less" scoped>
    @import "../../src/views/common/index.css";
    .top-nav {
        position: absolute;
        top: 0;
        background: #fff;
        z-index: 999;
    }
    .view-content {
        width: 400px;
        height: 700px;
        background: #f5f5f5;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 72px;
        box-shadow: 0 2px 6px #ccc;
    }
    .html-edit-area {
        width: auto;
        max-width: 400px;
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
    /deep/ .van-divider {
        margin: 8px 0;
        background-color: #F5F5F5;
    }
</style>