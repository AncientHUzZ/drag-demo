<template>
    <div class="ymf-picker-config">
        <div class="field-title">选择器设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="占位提示">
                    <el-input v-model="source.placeholder" placeholder="请输入提示文本"></el-input>
                </el-form-item>
                <el-form-item label="取消文字">
                    <el-input v-model="source.cancelText" placeholder="请输入取消文字"></el-input>
                </el-form-item>
                <el-form-item label="确认文字">
                    <el-input v-model="source.confirmText" placeholder="请输入确认文字"></el-input>
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
                <el-form-item label="删除该行">
                    <el-button type="primary" size="small" icon="el-icon-minus" @click="deleteOption(index)"></el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-picker-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        methods: {
			addOption() {
				let option = {
                    label: '',
					value: ''
				}
				this.source.options.push(option)
			},
			deleteOption(index) {
				this.source.options.splice(index,1)
			}
        }
	}
</script>

<style lang="less" scoped>
    .ymf-picker-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>