<template>
    <div class="ymf-field-config">
        <div class="field-title">输入框设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="label位置">
                    <el-radio-group v-model="source.fieldType" @change="checkType">
                        <el-radio label="text">文本框</el-radio>
                        <el-radio label="number">数字框</el-radio>
                        <el-radio label="textarea">文本域</el-radio>
                        <el-radio label="password">密码框</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="占位提示">
                    <el-input v-model="source.placeholder" placeholder="请输入提示文本"></el-input>
                </el-form-item>
                <el-form-item label="清除图标">
                    <el-switch v-model="source.clearable" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否禁用">
                    <el-switch v-model="source.disabled" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否只读">
                    <el-switch v-model="source.readonly" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="字数统计" v-show="isArea">
                    <el-switch v-model="source.showWordLimit" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-field-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        data() {
			return {
				isArea: false
            }
        },
        methods: {
			checkType(type) {
				if (type === 'textarea') {
					this.isArea = true
                } else {
					this.isArea = false
                    this.source.showWordLimit = false
                }
            }
        }
	}
</script>

<style scoped>
    .ymf-field-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>