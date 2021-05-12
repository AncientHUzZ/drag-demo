<template>
    <div>
        <div style="width: 100%;height: 50px;position: absolute;z-index: 1000;cursor: move"></div>
        <van-field name="checkboxGroup" :label="source.title">
            <template #input>
                <van-checkbox-group v-model="source.value"
                                    :direction="source.direction"
                                    :disabled="source.disabled"
                                    :icon-size="source.iconSize"
                                    :max="source.max"
                >
                    <van-checkbox v-for="(item, index) in source.options" :key="index"
                            :name="item.value"
                            shape="square">{{ item.label }}</van-checkbox>
                </van-checkbox-group>
            </template>
        </van-field>
    </div>
</template>

<script>
	export default {
		name: "ymf-checkbox",
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
        cursor: move !important;
    }
</style>