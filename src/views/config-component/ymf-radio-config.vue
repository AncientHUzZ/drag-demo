<template>
    <div class="ymf-radio-config">
        <div class="field-title">单选框设置</div>
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
    </div>
</template>

<script>
	export default {
		name: "ymf-radio-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
		methods: {
			addOption() {
				let option = {
					label: '示例选项' + (this.source.options.length + 1),
					value: this.source.options.length + 1,
                    isDefault: false
				}
				this.source.options.push(option)
			},
			deleteOption(index) {
				if (this.source.value === this.source.options[index].value) {
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
							this.source.value = item.value
						} else {
							this.source.value = ''
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
    .ymf-radio-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>