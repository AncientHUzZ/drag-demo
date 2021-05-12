<template>
    <div class="ymf-calender-config">
        <div class="field-title">日历设置</div>
        <br>
        <div style="width: 90%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="名称">
                    <el-input type="text" v-model="source.title" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="占位文本">
                    <el-input type="text" v-model="source.placeholder" placeholder="请输入占位文本"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-radio-group v-model="source.calenderType">
                        <el-radio label="single">单日期</el-radio>
                        <el-radio label="multiple">多日期</el-radio>
                        <el-radio label="range">日期区间</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="最小日期">
                    <el-date-picker v-model="source.minDate" type="date" placeholder="请选择最小日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="最大日期">
                    <el-date-picker v-model="source.maxDate" type="date" placeholder="请选择最大日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="默认日期">
                    <el-date-picker v-model="source.defaultDate" type="date" placeholder="请选择默认日期" @change="changeDate"></el-date-picker>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-calender-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        methods: {
			changeDate(date) {
				this.source.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-calender-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>