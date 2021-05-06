<template>
    <div class="ymf-image-config">
        <div class="field-title">图片设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto">
            <el-form ref="form" label-width="120px" label-suffix="：">
                <el-form-item label="图片宽度">
                    <el-input type="text" v-model="source.width">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="图片高度">
                    <el-input type="text" v-model="source.height">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="边框形状">
                    <el-switch v-model="source.round" active-text="圆形" inactive-text="正方形"></el-switch>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-image-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .ymf-image-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>