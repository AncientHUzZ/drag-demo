<template>
    <div style="width: 100%;height: 100%">
        <draggable class="drag-area" :list="pageSource.pages" :class="{'flex-drag-area': isFlex}"
                   group="custom-page" :animation="300" @add="handleAdd">
            <template v-for="(page, index) in pageSource.pages">
                <div class="page-item" :key="index" :class="{'flex-transform': isFlex,'select-active':selectedPageItem && selectedPageItem.uuid === page.uuid}"
                     v-on:click.stop="selectCurrentItem(page)">
                    <page-item :source="page"></page-item>
                    <i class="el-icon-error" @click="deletePageItem(index)"></i>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script>
	import Draggable from 'vuedraggable'
	import PageItem from './page-item'
	export default {
		name: "drag-page",
        props:{
			pageSource: {
				type: Object,
				required: true
			}
        },
		components: {
			Draggable,
			PageItem
		},
        data() {
		    return {

            }
        },
        computed: {
			isPage() {
				return this.pageSource.type === 'page'
            },
		    isFlex() {
		    	return this.pageSource.type === 'flex'
            },
            isForm() {
				return this.pageSource.type === 'form'
            },
			selectedPageItem() {
				return this.$store.state.selectedItem
            }
        },
        methods: {
			handleAdd(event) {
				//获取进入拖拽也得信下标
				let newIndex = event.newIndex
				//获取当前拖拽的组件
				let currentAddItem = null
				if (this.pageSource.pages.length -1 >= newIndex) {
					currentAddItem = JSON.parse(JSON.stringify(this.pageSource.pages[newIndex]))
				}
                //判断当前是否重复添加表单的行为
                if (this.isForm && currentAddItem && currentAddItem.type === 'form') {
                	this.$message.warning('请勿在表单区域内重复添加表单！')
                    this.deletePageItem(newIndex)
                    return
                }
                //判断当前是否为重复添加格栅布局的行为
				if (this.isFlex && currentAddItem && currentAddItem.type === 'flexbox') {
					this.$message.warning('请勿在格栅区域内重复添加格栅布局！')
					this.deletePageItem(newIndex)
					return
				}
				//添加UUID
				let uuid = Date.now() + '_' + Math.ceil(Math.random() * 99999)
				if (currentAddItem && !currentAddItem.uuid) currentAddItem.uuid = uuid
                //日历组件恢复数据类型
                if (currentAddItem && currentAddItem.type === 'calender') {
					currentAddItem.defaultDate = new Date(currentAddItem.defaultDate)
					currentAddItem.minDate = new Date(currentAddItem.minDate)
					currentAddItem.maxDate = new Date(currentAddItem.maxDate)
                }
				//更新数组
				this.$set(this.pageSource.pages, newIndex, currentAddItem) // 挂载依赖
				// console.log(this.pageSource.pages)
                this.selectCurrentItem(currentAddItem)
			},
			deletePageItem(index) {
				this.pageSource.pages.splice(index, 1)
				// console.log(this.pageSource.pages)
			},
			selectCurrentItem(item) {
				// console.log(item)
				this.$store.dispatch('changeSelectedItem', item)
            }
        }
	}
</script>

<style lang="less" scoped>
    .drag-area {
        width: 100%;
        height: 100%;
    }
    .flex-drag-area {
        width: 100%;
        min-height: 100px;
    }
    .el-icon-error {
        position: absolute;
        right: -10px;
        top: -6px;
        color: red;
        font-size: 25px;
        cursor: pointer;
        display: none;
        z-index: 99999;
    }
    .page-item{
        background: #fff;
        transition: 0.3s;
    }
    .page-item:hover {
        transform: scale(0.95);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 10px #afafaf;
        .el-icon-error {
            display: block;
            top: 0;
            right: 0;
        }
    }
    .flex-transform:hover {
        transform: scale(0.8) !important;
    }
    .select-active {
        border: 1px solid #FA4B1E;
    }
</style>