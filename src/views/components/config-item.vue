<template>
    <div>
        <component :is="getComponent()" :source="source"></component>
    </div>
</template>

<script>
	export default {
		name: "config-item",
		props: {
			source: {
				type: Object,
				required: true
			}
		},
		methods: {
			// 获取组件
			getComponent: function(){
				// console.log('component:', this.source)
				if (this.source.type) {
					const prefix = 'ymf-'
					const suffix = '-config'
					return prefix + this.source.type + suffix
                }
			}
		}
	}
</script>

<style scoped>

</style>