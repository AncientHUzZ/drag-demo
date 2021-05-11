<template>
    <div class="ymf-table-config">
        <div class="field-title">表格设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto">
            <table style="width: 100%" class="gridtable">
                <tr>
                    <th v-for="(th, index) in source.theadData" :key="index">
                       <el-input v-model="th.label" type="text"></el-input>
                    </th>
                <tr/>
                <tr v-for="(item, index) in source.tdData" :key="index">
                    <td v-for="(td, tIndex) in item.source" :key="tIndex">
                        <el-input v-model="td.label" type="text"></el-input>
                    </td>
                </tr>
            </table>
            <br>
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
			handleThChange(currentValue, oldValue) {
                let thIndex = this.source.theadData.length + 1
                let th = {
					id: thIndex,
                    label: '示例' + thIndex
                }
				if (currentValue > oldValue) {
					this.source.theadData.push(th)
                    this.source.tdData.forEach((item,index) => {
                    	let td = {
                    		id: thIndex,
                            label: '示例' + (index + 1) + '-' + thIndex
                        }
                        item.source.push(td)
                    })
				} else {
					this.source.theadData.pop()
					this.source.tdData.forEach((item) => {
						item.source.pop()
                    })
                }
            },
			handleTdChange(currentValue, oldValue) {
				let thLength = this.source.theadData.length
                let tdLength = this.source.tdData.length
                let source = []
                for(let i = 0; i < thLength; i++) {
                	let td = {
                		id: i,
                        label: '示例' + (tdLength + 1) + '-' + (i + 1)
                    }
                    source.push(td)
                }
				if (currentValue > oldValue) {
					let tds = {
						source: source
                    }
                    this.source.tdData.push(tds)
				} else {
					this.source.tdData.pop()
                }
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
    table.gridtable {
        font-family: verdana,arial,sans-serif;
        font-size:11px;
        color:#333333;
        border-width: 1px;
        border-color: #666666;
        border-collapse: collapse;
    }
    table.gridtable th {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #dedede;
    }
    table.gridtable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #ffffff;
    }
</style>