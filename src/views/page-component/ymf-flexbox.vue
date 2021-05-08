<template>
    <div class="flex-border">
        <van-row :gutter="source.gutter" :justify="source.justify" style="min-height: 100px">
            <van-col :span="count" v-for="(item,index) in source.itemDataSourceList" :key="index" style="min-height: 100px"
                     :class="{ 'is-border':count > 1 }">
                <div class="flex-basic">
                    <drag-page :pageSource="item"></drag-page>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
	import Draggable from 'vuedraggable'
	import DragPage from '../components/drag-page'
	export default {
		name: "ymf-flexbox",
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
        computed:{
			count() {
				return 24 / this.source.itemDataSourceList.length
            }
        }
	}
</script>

<style lang="less" scoped>
    .flex-border {
        min-height: 100px;
        border: 1px dashed #ccc;
        cursor: move;
    }
    .flex-basic {
        width: 100%;
        min-height: 100px;
    }
    .is-border {
        border-right: 1px dashed #ccc;
    }
</style>