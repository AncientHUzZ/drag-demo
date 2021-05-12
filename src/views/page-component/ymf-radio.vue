<template>
    <div>
        <div style="width: 100%;height: 50px;position: absolute;z-index: 1000;cursor: move"></div>
        <van-field name="radio" :label="source.title">
            <template #input>
                <van-radio-group v-model="source.value"
                                 :direction="source.direction"
                                 :disabled="source.disabled"
                                 :icon-size="source.iconSize"
                >
                        <van-radio v-for="(item, index) in source.options" :key="index"  :name="item.value">{{ item.label }}</van-radio>
                </van-radio-group>
            </template>
        </van-field>
    </div>
</template>

<script>
	export default {
		name: "ymf-radio",
		props:{
			source: { // horizontal vertical
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