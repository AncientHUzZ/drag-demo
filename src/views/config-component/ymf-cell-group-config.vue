<template>
    <div class="ymf-cell-group-config">
        <div class="field-title">文本展示组设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="标题">
                    <el-input type="text" v-model="source.title"></el-input>
                </el-form-item>
                <el-form-item label="外边框">
                    <el-switch v-model="source.border" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
                <el-form-item label="添加文本">
                    <el-button type="primary" size="small" icon="el-icon-plus" @click="addCell"></el-button>
                </el-form-item>
            </el-form>
            <el-form label-width="120px" label-suffix="：" v-for="(item,index) in source.itemDataSourceList" :key="index">
                <div>
                    <h3>序号：{{ index + 1 }}</h3>
                </div>
                <el-form-item label="左侧文本">
                    <el-input type="text" v-model="item.title"></el-input>
                </el-form-item>
                <el-form-item label="右侧文本">
                    <el-input type="text" v-model="item.value"></el-input>
                </el-form-item>
                <el-form-item label="说明文本">
                    <el-input type="text" v-model="item.subTitle"></el-input>
                </el-form-item>
                <el-form-item label="删除该行">
                    <el-button type="primary" size="small" icon="el-icon-minus" @click="deleteCell(index)"></el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-cell-group-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        methods: {
			addCell() {
				let cell = {
					uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
					type: 'cell',
					title: '文本展示',
					value: '示例文字',
					subTitle: '说明文本',
					icon: '',
				}
				this.source.itemDataSourceList.push(cell)
            },
			deleteCell(index) {
				this.source.itemDataSourceList.splice(index,1)
            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-cell-group-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>