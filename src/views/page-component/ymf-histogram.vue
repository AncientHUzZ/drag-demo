<template>
    <div>
        <o-chart :data="source.data" :tooltip="source.tooltip" :legend="source.legend">
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
		}
	}
</script>

<style scoped>

</style>