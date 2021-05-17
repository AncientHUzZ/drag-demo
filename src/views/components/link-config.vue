<template>
    <el-dialog title="添加联动" :visible.sync="linkageFlag" fullscreen :before-close="clear">
        <div style="width: 95%;margin: 0 auto;">
            <el-row>
                <el-col :span="8">
                    <h3>请选择被联动的组件</h3>
                    <linkage-page :page-source="page" @change="selectLinkage" ref="linkage"></linkage-page>
                </el-col>
                <el-col :span="8">
                    <transition name="el-fade-in">
                        <div v-show="linkageItemFlag">
                            <h3>请选择要联动的选项</h3>
                            <h4>当前选择组件：{{ source.title }}</h4>
                            <h4>当前联动组件：{{ linkComponent.title }}</h4>
                            <h4>当前组件拥有的选项：</h4>
                            <div style="display: flex;flex-direction: column;align-items: center">
                                <div v-for="(option,index) in source.options" :key="index" style="margin-bottom: 20px">
                                    <el-radio v-model="switchLink" :label="option.value" border
                                              @change="changeLinkOptions($event, index)"
                                    >{{ option.label }}</el-radio>
                                </div>
                            </div>
                        </div>
                    </transition>
                </el-col>
                <el-col :span="8">
                    <transition name="el-fade-in">
                        <div v-show="linkageOptionFlag" style="overflow-y: auto;height: 80vh">
                            <h3>请添加联动组件拥有的选项</h3>
                            <el-form>
                                <el-form-item label="添加选项" v-show="!checkFirstLink()">
                                    <el-button type="primary" size="small" icon="el-icon-plus" @click="addLinkOption()"></el-button>
                                </el-form-item>
                            </el-form>
                            <el-form label-width="120px" label-suffix="：" v-for="(item,index) in linkage.options" :key="index">
                                <div>
                                    <h3>序号：{{ index + 1 }}</h3>
                                </div>
                                <el-form-item label="label">
                                    <el-input type="text" v-model="item.label" :readonly="checkFirstLink()"></el-input>
                                </el-form-item>
                                <el-form-item label="value">
                                    <el-input type="text" v-model="item.value" :readonly="checkFirstLink()"></el-input>
                                </el-form-item>
                                <el-form-item label="设为默认">
                                    <el-switch v-model="item.isDefault" active-text="是" inactive-text="否" :disabled="checkFirstLink()"
                                               @change="setLinkDefaultValue($event, index)"
                                    ></el-switch>
                                </el-form-item>
                                <el-form-item label="删除该行" v-show="!checkFirstLink()">
                                    <el-button type="primary" size="small" icon="el-icon-minus"
                                               @click="deleteLinkOption(index)"></el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </transition>
                </el-col>
            </el-row>
        </div>
        <div slot="footer" style="text-align: center;position: absolute;bottom: 20px;width: 95%">
            <el-button @click="clear">取 消</el-button>
            <el-button type="primary" @click="confirm">添 加</el-button>
        </div>
    </el-dialog>
</template>

<script>
	import LinkagePage from './linkage-page'
	export default {
		name: "link-config",
		components: {
			LinkagePage
		},
		props:{
			source: {
				type: Object,
				required: true
			},
			page: {
				type: Object,
				required: false
			},
			linkageFlag: {
				type: Boolean,
                required: true,
                default: false
            }
		},
        data() {
			return {
				linkageItemFlag: false,
				linkComponent: {
					title: ''
				},
				switchLink: '',
				linkageOptionFlag: false,
				linkageOptionIndex: null,
				linkage: {
					optionIndex: '',
					uuid: '',
					options: []
				},
                isFirstDefault: false
            }
        },
        methods: {
			checkFirstLink() { //判断是否是添加第一个联动内容
				let firstFlag = true
				// console.log(this.source)
			    this.source.options.forEach(item => {
                    if (item.linkage.length > 0 ) {
                    	if (item.linkage.find(link => link.uuid === this.linkComponent.uuid)){
							firstFlag = false
                        }
                    }
                })
                return firstFlag
            },
			selectLinkage(linkComponent) { //获取被联动组件的信息
				this.linkComponent = linkComponent
				this.linkage = {
					optionIndex: '',
					uuid: linkComponent.uuid,
                    name: linkComponent.title,
					options:[]
				}
				this.linkageItemFlag = true
                this.$forceUpdate()
			},
			clear() { //初始化模态框内容
				this.$emit('close')
				this.linkageItemFlag = false
				this.linkageOptionFlag = false
				this.switchLink = ''
				this.$refs.linkage.clear()
			},
			changeLinkOptions(val,index) { //更换添加联动内容的当前组件选项
				this.linkageOptionFlag = true
				this.linkage.optionIndex = index
				/**
                 * 是第一次添加，把被联动组件的选项值先对应到当前组件的默认值选项上，
                 * 如果当前组件没有设置默认值，则对应上用户第一个选择的选项上
				 */
				if (this.checkFirstLink()) {
                    if (this.source.value !== '') { //有默认值
                        if (val === this.source.value) {
                        	this.isFirstDefault = true
							this.linkage.options = []
							this.linkComponent.options.forEach(option => {
								this.linkage.options.push(option)
                            })
                        } else {
                        	this.isFirstDefault = false
							this.linkage.options = []
						}
                    } else { //无默认值，在第一次选择的选项中添加
						this.linkage.options = []
						this.linkComponent.options.forEach(option => {
							this.linkage.options.push(option)
						})
                    }
                }
			},
			addLinkOption() { //添加值
				let type = this.linkComponent.type
                if (type === 'switch') {
                	if (this.linkage.options.length === 2) {
                		this.$message.warning('开关组件只能添加两个选项！')
                		return
                    }
                }
				let option = {
					label: '示例选项',
					value: '示例值',
					isDefault: false
				}
				this.linkage.options.push(option)
			},
			deleteLinkOption(index) { //删除选项
				this.linkage.options.splice(index, 1)
			},
			setLinkDefaultValue(newVal, optionIndex) { //设置默认值
				let type = this.linkComponent.type
				if (type !== 'checkbox') {
					this.linkage.options.forEach((item, index) => {
						item.isDefault = false
						if (optionIndex === index) {
							item.isDefault = newVal
						}
					})
				}
			},
			confirm() {
				this.clear()
				this.$emit('confirm', this.linkage)
            }
        }
	}
</script>

<style scoped>

</style>