<template>
    <div>
        <component :is="getComponent()" :source="source"></component>
    </div>
</template>

<script>
	export default {
		name: "page-item",
        props: {
			source: {
				type: Object,
				required: true
			}
        },
        methods: {
			// 获取组件
			getComponent: function(){
				const prefix = 'ymf-'
				return prefix + this.source.type
			}
        }
	}
</script>

<style lang="less" scoped>

</style>