<template>
    <div class="ymf-checkbox-config">
        <div class="field-title">多选框设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="禁用状态">
                    <el-switch v-model="source.disabled" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="摆放方向">
                    <el-radio-group v-model="source.direction">
                        <el-radio label="horizontal">横向</el-radio>
                        <el-radio label="vertical">纵向</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="图标大小">
                    <el-input type="text" v-model="source.iconSize">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
<!--                <el-form-item label="添加联动">-->
<!--                    <el-button type="primary" icon="el-icon-plus" size="small" @click="showLinkage"></el-button>-->
<!--                </el-form-item>-->
<!--                <div v-for="(item, index) in source.options" :key="index">-->
<!--                    <h4>联动选项：{{ item.label }}</h4>-->
<!--                    <p v-for="(link, lIndex) in item.linkage" :key="lIndex" style="margin-left: 20px">-->
<!--                        <span>联动组件ID：{{ link.uuid }}</span>-->
<!--                    </p>-->
<!--                </div>-->
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
                    <el-button type="primary" size="small" icon="el-icon-minus" @click="deleteOption(item,index)"></el-button>
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
		name: "ymf-checkbox-config",
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
					label: '示例选项' + (this.source.options.length + 1),
					value: this.source.options.length + 1,
					isDefault: false,
					linkage:[]
				}
				this.source.options.push(option)
			},
			deleteOption(item,index) {
				let deleteIndex = this.source.value.findIndex((n)=> n === item.value)
				this.source.value.splice(deleteIndex, 1)
				this.source.options.splice(index,1)
			},
			setDefaultValue(newVal, index) {
				this.source.options.forEach((item, optionIndex) => {
					if (index === optionIndex) {
						item.isDefault = newVal
						if (newVal) {
							this.source.value.push(item.value)
						} else {
							let deleteIndex = this.source.value.findIndex((n)=> n === item.value)
							this.source.value.splice(deleteIndex, 1)
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
    .ymf-checkbox-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>