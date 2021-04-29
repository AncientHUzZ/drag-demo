<template>
    <el-container>
        <el-header>
            <div class="drag-header"></div>
        </el-header>
        <el-main>
            <div class="edit-area">
                <div class="component-selection">
                    <div style="padding: 10px">
                        <div v-for="(field, index) in componentList" :key="index" class="field-list">
                            <div class="field-title">{{field.title}}</div>
                            <div>
                                <draggable :list="field.list" :sort="false"
                                           :group="{ name: 'custom-page', pull: 'clone', put: false }">
                                    <template v-for="(item, index) in field.list">
                                        <el-button plain class="field-label" :key="index">{{ item.title }}</el-button>
                                    </template>
                                </draggable>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="html-edit-area">
                    <div style="">
                        <drag-content-page :pageSource="sourceData"></drag-content-page>
                    </div>
                </div>
                <div class="component-config"></div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    import filed from "./filed";
	import Draggable from 'vuedraggable'
    import DragContentPage from './components/drag-content-page'
	export default {
		name: "drag-index",
		components: {
			Draggable,
			DragContentPage
		},
        data() {
			return {
                componentList: filed,
                sourceData:{
					uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
                    type: 'page',
                	pages: []
                }
            }
        }
	}
</script>

<style lang="less" scoped>
    /deep/.el-header {
        padding: 0;
    }
    /deep/.el-main {
        padding: 0;
    }
    .drag-header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 0 #eaeaea
    }
    .edit-area {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f7f8f9;
        height: calc(100vh - 80px);
        .component-selection {
            width: 400px;
            height: 100%;
            background: #FFFFFF;
            .field-list{
                width: 100%;
                .field-title{
                    text-align: left;
                    font-weight: 700;
                    font-size: 18px;
                }
                .field-label{
                    width: 120px;
                    margin: 10px;
                    cursor: move;
                }
            }
        }
        .component-config {
            width: 400px;
            height: 100%;
            background: #FFFFFF;
        }
        .html-edit-area {
            width: auto;
            max-width: 400px;
            position: relative;
        }

    }
</style>