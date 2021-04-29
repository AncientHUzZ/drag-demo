<template>
    <div :style="{height: formHeight}" style="cursor: move">
        <van-form
                :label-width="source.labelWidth"
                :label-align="source.labelAlign"
                :input-align="source.inputAlign"
                :colon="source.colon"
                style="height: 100%"
        >
            <drag-page :pageSource="source.itemDataSource" style="padding-top: 20px"></drag-page>
        </van-form>
    </div>
</template>

<script>
	import Draggable from 'vuedraggable'
	import DragPage from '../components/drag-page'
	export default {
		name: "ymf-form",
        components: {
			Draggable,
			DragPage
        },
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        computed: {
			formHeight () {
				let length = this.source.itemDataSource.pages.length
				return length >= 2 ? 70 * length  + 'px' : '100px'
            }
        },
	}
</script>

<style scoped>

</style>