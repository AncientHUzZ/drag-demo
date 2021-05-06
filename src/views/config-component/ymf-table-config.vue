<template>
    <div class="ymf-table-config">
        <div class="field-title">表格设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto">
            <el-form ref="form" label-width="120px" label-suffix="：">
                <el-form-item label="增加列">
                    <el-input-number v-model="ths" @change="handleThChange" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="增加行">
                    <el-input-number v-model="tds" @change="handleTdChange" :min="1"></el-input-number>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-table-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        data() {
			return {
				ths: 1,
                tds: 1,
            }
        },
        created() {
			this.ths = this.source.theadData.length
            this.tds = this.source.tdData.length
		},
		methods: {
			handleThChange() {
				console.log(this.source)
                let msg = '示例' + this.ths
				this.source.theadData.push(msg)
            },
			handleTdChange() {

            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-table-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>