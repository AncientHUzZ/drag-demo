<template>
    <el-container>
        <el-header>
            <div class="drag-header">
                <el-button type="text" icon="el-icon-view" style="margin-left: 70%" @click="showPreview">预览</el-button>
            </div>
        </el-header>
        <el-main>
            <div class="edit-area">
                <div class="component-selection">
                    <div style="padding: 10px">
                        <div v-for="(field, index) in componentList" :key="index" class="field-list">
                            <h3>{{field.title}}</h3>
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
                    <drag-content-page :pageSource="sourceData"></drag-content-page>
                </div>
                <div class="component-config">
                    <component-config :current-page-item="selectedPageItem" :page-source="sourceData"></component-config>
                </div>
            </div>
        </el-main>
        <drag-preview :page-source="sourceData" :preview-flag="previewFlag" :refresh-key="refreshKey"
                      @close="closePreview"></drag-preview>
    </el-container>
</template>

<script>
    import filed from "./filed";
	import Draggable from 'vuedraggable'
    import DragContentPage from './components/drag-content-page'
    import ComponentConfig from './components/component-config'
    import DragPreview from './drag-preview-index'
	export default {
		name: "drag-index",
		components: {
			Draggable,
			DragContentPage,
			ComponentConfig,
			DragPreview
		},
        computed:{
			selectedPageItem() {
				return this.$store.state.selectedItem
			}
        },
        data() {
			return {
                componentList: filed,
                sourceData:{
					uuid: Date.now() + '_' + Math.ceil(Math.random() * 99999),
                    type: 'page',
                	pages: []
                },
                previewFlag: false,
				refreshKey: new Date().getTime()
            }
        },
        methods: {
			showPreview() {
				this.refreshKey = new Date().getTime()
				this.previewFlag = true
            },
			closePreview() {
				this.previewFlag = false
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
            width: 500px;
            height: 100%;
            background: #FFFFFF;
            .field-list{
                width: 100%;
                .field-label{
                    width: 120px;
                    margin: 10px;
                    cursor: move;
                }
            }
        }
        .component-config {
            width: 500px;
            height: 100%;
            background: #FFFFFF;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        .html-edit-area {
            width: auto;
            max-width: 400px;
            position: relative;
            display: flex;
            flex-direction: row;
        }

    }
</style>