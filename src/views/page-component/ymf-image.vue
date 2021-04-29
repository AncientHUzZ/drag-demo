<template>
    <div>
        <van-image
                :width="source.width"
                :height="source.height"
                fit="fill"
                :src="source.url"
                :round="source.round"
        />
    </div>
</template>

<script>
	export default {
		name: "ymf-image",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    /deep/.van-image {
        cursor: move;
    }
</style>