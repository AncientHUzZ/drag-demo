<template>
    <div class="ymf-pie-config">
        <div class="field-title">饼状图设置</div>
        <br>
        <div style="width: 90%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="图例位置">
                    <el-radio-group v-model="source.legend.position">
                        <el-radio label="left">左侧</el-radio>
                        <el-radio label="top">上方</el-radio>
                        <el-radio label="right">右侧</el-radio>
                        <el-radio label="bottom">下方</el-radio>
                    </el-radio-group>
                </el-form-item>
                <h3>数据</h3>
                <el-form-item label="添加数据">
                    <el-button type="primary" size="small" icon="el-icon-plus" @click="showDataPlus"></el-button>
                </el-form-item>
            </el-form>
            <div v-for="(item ,index) in source.data" :key="index">
                <div>
                    <span>名称：{{ item.label }}</span>
                    <span style="margin-left: 20px">数值：{{ item.value }}</span>
                    <i class="el-icon-delete" style="color: #66ccff;float: right;font-size: 24px"
                       @click="deleteData(index)"
                    ></i>
                    <el-divider></el-divider>
                </div>
            </div>
        </div>
        <el-dialog title="添加数据" :visible.sync="plusFlag">
            <el-form :model="line" ref="lineForm" label-position="left" :rules="rules"
                     label-width="100px" label-suffix="：" style="width: 60%;margin: 0 auto">
                <el-form-item label="名称" prop="label">
                    <el-input v-model="line.label" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="数值" prop="value">
                    <el-input v-model="line.value" type="number" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel('lineForm')">取 消</el-button>
                <el-button type="primary" @click="addData('lineForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
	export default {
		name: "ymf-pie-config",
		props: {
			source: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				plusFlag: false,
				line: {
					label: '',
					value: ''
				},
				rules: {
					label: [
						{ required: true, message: '请输入名称', trigger: 'blur' }
					],
					value: [
						{ required: true, message: '请输入数值', trigger: 'blur' }
					]
				}
			}
		},
        methods: {
			deleteData(index) {
				this.source.data.splice(index, 1)
			},
			showDataPlus() {
				this.plusFlag = true
			},
			cancel(formName) {
				this.plusFlag = false
				this.$refs[formName].resetFields()
			},
			addData(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let line = JSON.parse(JSON.stringify(this.line))
						line.value = Number(line.value)
						this.source.data.push(line)
						this.plusFlag = false
						this.line.label = ''
						this.line.value = ''
					}
				})
			}
        }
	}
</script>

<style lang="less" scoped>
    .ymf-pie-config {
        padding: 5px;
    }
    .field-title {
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>