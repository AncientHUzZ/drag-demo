<template>
    <div class="ymf-stepper-config">
        <div class="field-title">计数器设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="150px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="默认值">
                    <el-input v-model="source.value" placeholder="请输入默认值" type="number"></el-input>
                </el-form-item>
                <el-form-item label="最小值">
                    <el-input v-model="source.min" placeholder="请输入最小值" type="number"></el-input>
                </el-form-item>
                <el-form-item label="最大值">
                    <el-input v-model="source.max" placeholder="请输入最大值" type="number"></el-input>
                </el-form-item>
                <el-form-item label="步长">
                    <el-input-number v-model="source.step" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="输入框宽度">
                    <el-input type="text" v-model="source.inputWidth">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="按钮大小">
                    <el-input type="text" v-model="source.buttonSize">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="只允许整数">
                    <el-switch v-model="source.integer" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否禁用">
                    <el-switch v-model="source.disabled" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否禁用增加按钮">
                    <el-switch v-model="source.disabledPlus" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否禁用减少按钮">
                    <el-switch v-model="source.disabledMinus" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="是否禁用输入框">
                    <el-switch v-model="source.disabledInput" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-stepper-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .ymf-stepper-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>