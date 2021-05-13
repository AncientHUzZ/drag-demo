<template>
    <div class="ymf-field-config">
        <div class="field-title">开关设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="打开值">
                    <el-input v-model="source.activeValue" placeholder="请输入打开值"></el-input>
                </el-form-item>
                <el-form-item label="关闭值">
                    <el-input v-model="source.inactiveValue" placeholder="请输入关闭值"></el-input>
                </el-form-item>
                <el-form-item label="默认值">
                    <el-select v-model="source.value">
                        <el-option :value="source.inactiveValue" label="关闭"></el-option>
                        <el-option :value="source.activeValue" label="打开"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开关尺寸">
                    <el-input type="text" v-model="source.size">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="禁用状态">
                    <el-switch v-model="source.disabled" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="添加联动">
                    <el-button type="primary" icon="el-icon-plus" size="small" @click="showLinkage"></el-button>
                </el-form-item>
            </el-form>
            <div v-for="(item, index) in source.options" :key="index">
                <h4>{{ item.label }}</h4>
                <p v-for="(link, lIndex) in item.linkage" :key="lIndex">
                    <span>联动组件ID：{{ link.uuid }}</span>
                </p>
            </div>
        </div>


        <el-dialog title="添加联动" :visible.sync="linkageFlag" fullscreen @close="clear">
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
                                    <el-form-item label="添加选项">
                                        <el-button type="primary" size="small" icon="el-icon-plus" @click="addLinkOption()"></el-button>
                                    </el-form-item>
                                </el-form>
                                <el-form label-width="120px" label-suffix="：" v-for="(item,index) in linkage.options" :key="index">
                                    <div>
                                        <h3>序号：{{ index + 1 }}</h3>
                                    </div>
                                    <el-form-item label="label">
                                        <el-input type="text" v-model="item.label"></el-input>
                                    </el-form-item>
                                    <el-form-item label="value">
                                        <el-input type="text" v-model="item.value"></el-input>
                                    </el-form-item>
                                    <el-form-item label="设为默认">
                                        <el-switch v-model="item.isDefault" active-text="是" inactive-text="否"
                                                   @change="setLinkDefaultValue($event, index)"
                                        ></el-switch>
                                    </el-form-item>
                                    <el-form-item label="删除该行">
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
    </div>
</template>

<script>
    import LinkagePage from '../components/linkage-page'
	export default {
		name: "ymf-switch-config",
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
            }
		},
        data() {
		    return {
				linkageFlag: false,
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
                }
            }
        },
        watch: {
			source: {
				deep: true,
                handler: function (newValue) {
                    if (newValue) {
                    	if (newValue.value !== newValue.inactiveValue && newValue.value !== newValue.activeValue) {
                    		this.source.value = newValue.inactiveValue
                        }
                    }
				}
            }
        },
		methods: {
			selectLinkage(linkComponent) { //获取被联动组件的信息
                this.linkComponent = linkComponent
                this.linkage = {
                	optionIndex: '',
                    uuid: linkComponent.uuid,
                    options:[]
                }
                this.linkageItemFlag = true
            },
			clear() { //初始化模态框内容
				this.linkageFlag = false
				this.linkageItemFlag = false
				this.linkageOptionFlag = false
                this.switchLink = ''
                this.$refs.linkage.clear()
            },
            showLinkage() {
				this.$store.dispatch('changeSelectedItemToLink', this.source)
				this.linkageFlag = true
            },
			changeLinkOptions(label,index) { //更换添加联动内容的当前组件选项
				this.linkageOptionFlag = true
                this.linkage.optionIndex = index
            },
			addLinkOption() { //添加值
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
                if (type === 'radio' || type === 'picker') {
					this.linkage.options.forEach((item, index) => {
						item.isDefault = false
						if (optionIndex === index) {
							item.isDefault = newVal
						}
					})
                }
            },
			confirm() {
                this.source.options.forEach((item, index) => {
                	if (index === this.linkage.optionIndex) {
                		let temp = {
                			uuid: this.linkage.uuid,
                            options: this.linkage.options
                        }
                        item.linkage.push(temp)
                    }
                })
				// this.source.isLinkage = true
                this.clear()
            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-swipe-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>