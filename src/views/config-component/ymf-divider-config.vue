<template>
    <div class="ymf-divider-config">
        <div class="field-title">分割线设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="虚线">
                    <el-switch v-model="source.dashed" active-text="虚线" inactive-text="实线"></el-switch>
                </el-form-item>
                <el-form-item label="文本内容">
                    <el-input type="text" v-model="source.content"></el-input>
                </el-form-item>
                <el-form-item label="文本位置">
                    <el-radio-group v-model="source.contentPosition">
                        <el-radio label="left">左侧</el-radio>
                        <el-radio label="center">居中</el-radio>
                        <el-radio label="right">右侧</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-divider-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .ymf-divider-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>