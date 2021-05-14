<template>
    <div style="cursor: move">
        <van-cell-group :title="source.title" :border="source.border">
            <van-cell  v-for="(item, index) in source.itemDataSourceList" :key="index"
                       :title="item.title"
                       :value="item.value"
                       :label="item.subTitle"
            />
        </van-cell-group>
    </div>
</template>

<script>
	export default {
		name: "ymf-cell-group",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    /deep/.van-cell-group__title {
        background-color: #F5F5F5;
    }
</style>