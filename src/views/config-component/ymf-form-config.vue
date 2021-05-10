<template>
    <div class="ymf-form-config">
        <div class="field-title">表单设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="label宽度">
                    <el-input type="text" v-model="source.labelWidth">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="label位置">
                    <el-radio-group v-model="source.labelAlign">
                        <el-radio label="left">左对齐</el-radio>
                        <el-radio label="center">居中</el-radio>
                        <el-radio label="right">右对齐</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="输入框位置">
                    <el-radio-group v-model="source.inputAlign">
                        <el-radio label="left">左对齐</el-radio>
                        <el-radio label="center">居中</el-radio>
                        <el-radio label="right">右对齐</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="冒号后缀">
                    <el-switch v-model="source.colon" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-form-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .ymf-form-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>