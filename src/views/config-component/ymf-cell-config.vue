<template>
    <div class="ymf-cell-config">
        <div class="field-title">文本展示设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="左侧文本">
                    <el-input type="text" v-model="source.title"></el-input>
                </el-form-item>
                <el-form-item label="右侧文本">
                    <el-input type="text" v-model="source.value"></el-input>
                </el-form-item>
                <el-form-item label="说明文本">
                    <el-input type="text" v-model="source.subTitle"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-cell-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .ymf-cell-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>