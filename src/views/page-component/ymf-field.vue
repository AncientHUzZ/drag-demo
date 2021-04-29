<template>
    <div>
        <van-field v-model="source.value"
                   :label="source.title"
                   :type="source.fieldType"
                   :placeholder="source.placeholder"
                   :clearable="source.clearable"
                   :maxlength="source.maxLength"
                   :disabled="source.disabled"
                   :readonly="source.readonly"
        />
    </div>
</template>

<script>
	export default {
		name: "ymf-field",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    /deep/.van-field {
        cursor: move;
    }
</style>