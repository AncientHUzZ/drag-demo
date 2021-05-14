<template>
    <div style="position: relative">
        <div class="modal-custom"></div>
        <van-field v-model="source.value"
                   :label="source.title"
                   :type="source.fieldType"
                   :placeholder="source.placeholder"
                   :clearable="source.clearable"
                   maxlength="200"
                   :disabled="source.disabled"
                   readonly
                   :show-word-limit="source.showWordLimit"
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
    .modal-custom {
        width: 100%;
        height: 50px;
        position: absolute;
        z-index: 1000;
        cursor: move
    }
</style>