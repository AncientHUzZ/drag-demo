<template>
    <div style="position: relative">
        <div style="width: 100%;height: 50px;position: absolute;z-index: 1000;cursor: move"></div>
        <van-field name="switch" :label="source.title" readonly>
            <template #input>
                <span style="margin-right: 10px" :class="{ 'active':source.value === source.inactiveValue }">{{ source.options[0].label }}</span>
                <van-switch v-model="source.value"
                            :size="source.size"
                            :disabled="source.disabled"
                            :active-value="source.activeValue"
                            :inactive-value="source.inactiveValue"
                />
                <span style="margin-left: 10px" :class="{ 'active':source.value === source.activeValue }">{{ source.options[1].label }}</span>
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
		},
	}
</script>

<style lang="less" scoped>
    /deep/.van-cell {
        cursor: move;
    }
    .active {
        color: #1989fa;
    }
</style>