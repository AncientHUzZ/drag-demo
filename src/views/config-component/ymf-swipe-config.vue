<template>
    <div class="ymf-swipe-config">
        <div class="field-title">轮播图设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto">
            <el-form ref="form" label-width="120px" label-suffix="：">
                <el-form-item label="轮播图高度">
                    <el-input type="text" v-model="source.height">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="滚动方式">
                    <el-switch v-model="source.vertical" active-text="纵向滚动" inactive-text="横向滚动"></el-switch>
                </el-form-item>
                <el-form-item label="指示器">
                    <el-switch v-model="source.showIndicators" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="循环播放">
                    <el-switch v-model="source.loop" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="轮播间隔" v-if="source.loop">
                    <el-input type="number" v-model="source.autoplay">
                        <template #append>毫秒(ms)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="动画时间" v-if="source.loop">
                    <el-input type="number" v-model="source.duration">
                        <template #append>毫秒(ms)</template>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-swipe-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="less" scoped>
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
    .ymf-swipe-config {
        padding: 5px;
    }
</style>