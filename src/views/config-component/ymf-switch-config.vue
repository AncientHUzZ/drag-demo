<template>
    <div class="ymf-field-config">
        <div class="field-title">开关设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="打开值">
                    <el-input v-model="source.activeValue" placeholder="请输入打开值"></el-input>
                </el-form-item>
                <el-form-item label="关闭值">
                    <el-input v-model="source.inactiveValue" placeholder="请输入关闭值"></el-input>
                </el-form-item>
                <el-form-item label="默认值">
                    <el-select v-model="source.value">
                        <el-option :value="source.inactiveValue" label="关闭"></el-option>
                        <el-option :value="source.activeValue" label="打开"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开关尺寸">
                    <el-input type="text" v-model="source.size">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="禁用状态">
                    <el-switch v-model="source.disabled" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>

                <el-form-item label="是否联动">
                    <el-switch v-model="source.isLinkage" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-switch-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        watch: {
			source: {
				deep: true,
                handler: function (newValue) {
                    if (newValue) {
                    	if (newValue.value !== newValue.inactiveValue && newValue.value !== newValue.activeValue) {
                    		this.source.value = newValue.inactiveValue
                        }
                    }
				}
            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-swipe-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>