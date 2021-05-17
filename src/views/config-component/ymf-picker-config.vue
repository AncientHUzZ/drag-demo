<template>
    <div class="ymf-picker-config">
        <div class="field-title">选择器设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="占位提示">
                    <el-input v-model="source.placeholder" placeholder="请输入提示文本"></el-input>
                </el-form-item>
                <el-form-item label="取消文字">
                    <el-input v-model="source.cancelText" placeholder="请输入取消文字"></el-input>
                </el-form-item>
                <el-form-item label="确认文字">
                    <el-input v-model="source.confirmText" placeholder="请输入确认文字"></el-input>
                </el-form-item>
                <el-form-item label="添加联动">
                    <el-button type="primary" icon="el-icon-plus" size="small" @click="showLinkage"></el-button>
                </el-form-item>
                <div v-for="(item, index) in source.options" :key="index">
                    <h4>联动选项：{{ item.label }}</h4>
                    <p v-for="(link, lIndex) in item.linkage" :key="lIndex" style="margin-left: 20px">
                        <span>联动组件ID：{{ link.uuid }}</span>
                        <i class="el-icon-delete" style="color: #6CF;margin-left: 10px;font-size: 20px;cursor: pointer"
                           @click="deleteLinkage(lIndex,item)"></i>
                    </p>
                </div>
                <el-form-item label="添加选项">
                    <el-button type="primary" size="small" icon="el-icon-plus" @click="addOption"></el-button>
                </el-form-item>
            </el-form>
            <el-form label-width="120px" label-suffix="：" v-for="(item,index) in source.options" :key="index">
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
                    <el-switch v-model="item.isDefault" active-text="是" inactive-text="否" @change="setDefaultValue($event, index)"></el-switch>
                </el-form-item>
                <el-form-item label="删除该行">
                    <el-button type="primary" size="small" icon="el-icon-minus" @click="deleteOption(index)"></el-button>
                </el-form-item>
            </el-form>
        </div>
        <link-config :page="page" :source="source" :linkage-flag="linkageFlag"
                     @close="close" @confirm="confirm"></link-config>
    </div>
</template>

<script>
	import LinkConfig from '../components/link-config'
	export default {
		name: "ymf-picker-config",
		components: {
			LinkConfig
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
				linkageFlag: false
			}
		},
        methods: {
			showLinkage() {
				this.$store.dispatch('changeSelectedItemToLink', this.source)
				this.linkageFlag = true
			},
			close() {
				this.linkageFlag = false
			},
			confirm(linkage) {
				this.source.isLinkage = false
				this.source.options.forEach((item, index) => {
					if (index === linkage.optionIndex) {
						let temp = {
							uuid: linkage.uuid,
							options: linkage.options
						}
						item.linkage.push(temp)
					}
					if (item.linkage.length > 0) {
						this.source.isLinkage = true
					}
				})
			},
			addOption() {
				let option = {
                    label: '',
					value: '',
					isDefault: false,
					linkage:[]
				}
				this.source.options.push(option)
                this.$forceUpdate()
			},
			deleteOption(index) {
				if (this.source.value === this.source.options[index].label) {
					this.source.value = ''
                }
				this.source.options.splice(index,1)
			},
            setDefaultValue(newVal, index) {
                this.source.options.forEach((item, optionIndex) => {
                	item.isDefault = false
                    if (index === optionIndex) {
						item.isDefault = newVal
                        if (newVal) {
                        	this.source.value = item.label
                        } else {
							this.source.value = ''
                        }
                    }
                })
            },
			deleteLinkage(index,option) { //删除联动内容，并检查是否全部删除，全部删除修改isLinkage状态
				option.linkage.splice(index,1)
				this.source.isLinkage = false
				this.source.options.forEach(item => {
					if (item.linkage.length > 0) {
						this.source.isLinkage = true
					}
				})
				console.log(this.source.isLinkage)
			}
        }
	}
</script>

<style lang="less" scoped>
    .ymf-picker-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>