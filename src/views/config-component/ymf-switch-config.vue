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
                <el-form-item label="添加联动">
                    <el-button type="primary" icon="el-icon-plus" size="small" @click="showLinkage"></el-button>
                </el-form-item>
            </el-form>
            <div v-for="(item, index) in source.options" :key="index">
                <h4>{{ item.label }}</h4>
                <p v-for="(link, lIndex) in item.linkage" :key="lIndex">
                    <span>联动组件ID：{{ link.uuid }}</span>
                </p>
            </div>
        </div>
        <link-config :page="page" :source="source" :linkage-flag="linkageFlag"
                     @close="close" @confirm="confirm"></link-config>
    </div>
</template>

<script>
    import LinkConfig from '../components/link-config'
	export default {
		name: "ymf-switch-config",
        components: {
			LinkConfig
        },
		props:{
			source: {
				type: Object,
				required: true
			},
            page: {
				type: Object,
				required: false
            }
		},
        data() {
		    return {
				linkageFlag: false
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
        },
		methods: {
            showLinkage() {
				this.$store.dispatch('changeSelectedItemToLink', this.source)
				this.linkageFlag = true
            },
			close() {
                this.linkageFlag = false
            },
			confirm(linkage) {
                this.source.options.forEach((item, index) => {
                	if (index === linkage.optionIndex) {
                		let temp = {
                			uuid: linkage.uuid,
                            options: linkage.options
                        }
                        item.linkage.push(temp)
                    }
                })
				// this.source.isLinkage = true
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