<template>
    <div class="ymf-flexbox-config">
        <div class="field-title">格栅布局设置</div>
        <br>
        <div style="width: 80%;margin: 0 auto;">
            <el-form label-width="120px" label-suffix="：">
                <el-form-item label="列数">
                    <el-input-number v-model="length" @change="handleChange" :min="1" :max="4"></el-input-number>
                </el-form-item>
                <el-form-item label="间隔" v-if="length > 1">
                    <el-input type="text" v-model="source.gutter">
                        <template #append>像素(px)</template>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-flexbox-config",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        data() {
			return {
				length: 1
            }
        },
        created() {
			this.length = this.source.itemDataSourceList.length
		},
		methods:{
			handleChange(currentValue, oldValue) {
				let flexbox = {
					uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
					type: 'flex',
					pages: []
                }
                if (currentValue > oldValue) {
                	this.source.itemDataSourceList.push(flexbox)
                } else {
					this.source.itemDataSourceList.pop()
                }
            }
        }
	}
</script>

<style lang="less" scoped>
    .ymf-flexbox-config {
        padding: 5px;
    }
    .field-title{
        text-align: left;
        font-weight: 700;
        font-size: 18px;
    }
</style>