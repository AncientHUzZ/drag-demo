<template>
    <div>
        <van-field name="switch" :label="source.title">
            <template #input>
                <van-switch v-model="source.value"
                            :size="source.size"
                            :disabled="source.disabled"
                            :active-value="source.activeValue"
                            :inactive-value="source.inactiveValue"
                />
            </template>
        </van-field>
    </div>
</template>

<script>
	export default {
		name: "ymf-switch",
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