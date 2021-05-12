<template>
    <div>
        <o-chart :data="source.data" :tooltip="source.tooltip" :legend="source.legend" :key="refreshKey">
            <o-histogram position="label*value"></o-histogram>
        </o-chart>
    </div>
</template>

<script>
	export default {
		name: "ymf-histogram",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
		watch:{
			source:{
				deep: true,
				handler: function (newValue) {
					if (newValue) {
						this.refreshKey = new Date().getTime()
					}
				}
			}
		},
		data() {
			return {
				refreshKey: new Date().getTime()
			}
		},
	}
</script>

<style scoped>

</style>