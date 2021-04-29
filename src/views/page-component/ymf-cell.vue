<template>
    <div>
        <van-cell
                :title="source.title"
                :value="source.value"
                :label="source.subTitle" />
    </div>
</template>

<script>
	export default {
		name: "ymf-cell",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    /deep/.van-cell {
        cursor: move;
    }
</style>