<template>
    <div>
        <van-field name="stepper" :label="source.title">
            <template #input>
                <van-stepper v-model="source.value"
                             :min="source.min"
                             :max="source.max"
                             :step="source.step"
                             :input-width="source.inputWidth"
                             :button-size="source.buttonSize"
                             :integer="source.integer"
                             :disabled="source.disabled"
                             :disable-plus="source.disabledPlus"
                             :disable-minus="source.disabledMinus"
                             :disable-input="source.disabledInput"
                />
            </template>
        </van-field>
    </div>
</template>

<script>
	export default {
		name: "ymf-stepper",
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