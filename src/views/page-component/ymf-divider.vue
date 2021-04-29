<template>
    <div style="cursor: move">
        <van-divider :style="{borderColor: '#cccccc'}" v-if="source.content"
                :dashed="source.dashed" :content-position="source.contentPosition">
            {{ source.content }}
        </van-divider>
        <div style="width: 100%;height: 12px;background: #FFFFFF;padding-top: 12px" v-else>
            <van-divider :dashed="source.dashed" :style="{borderColor: '#cccccc'}"/>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ymf-divider",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    /deep/ .van-divider {
        margin: 0;
    }
</style>