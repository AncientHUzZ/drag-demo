<template>
    <div>
        <van-swipe :autoplay="source.autoplay"
                   :vertical="source.vertical"
                   :loop="source.loop"
                   :show-indicators="source.showIndicators"
                   :height="source.height"
        >
            <van-swipe-item v-for="(item, index) in source.list" :key="index">
                <van-image
                        :height="source.height"
                        :src="item.image"
                        fit="fill"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
	export default {
		name: "ymf-swipe",
        props:{
			source: {
				type: Object,
                required: true
            }
        }
	}
</script>

<style lang="less" scoped>
    /deep/.van-swipe {
        cursor: move;
    }
</style>