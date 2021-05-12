<template>
    <div class="config">
        <el-tabs v-model="defaultTab">
            <el-tab-pane label="组件设置" name="first">
                <config-item :source="currentPageItem" :page="pageSource"></config-item>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ConfigItem from './config-item'
	export default {
		name: "component-config",
        components:{
			ConfigItem
        },
		props:{
			currentPageItem: {
				type: Object,
				required: true,
                default:{}
			},
			pageSource: {
				type: Object,
				required: true
			}
		},
        watch:{
			currentPageItem: {
				deep:true,
                handler:(newValue) => {
					// console.log('newConfig:', newValue)
                }
            }
        },
        data() {
			return {
				defaultTab: 'first'
            }
        },
	}
</script>

<style lang="less" scoped>
    .config {
        width: 100%;
        padding: 5px;
    }
</style>