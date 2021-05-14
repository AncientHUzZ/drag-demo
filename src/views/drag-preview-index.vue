<template>
    <el-dialog title="预览" :visible.sync="previewFlag" fullscreen :before-close="closeShow">
        <div style="width: 80%;margin: 0 auto">
            <div class="html-edit-area">
                <div class="top-nav">
                    <el-image :src="phone" style="width: 100%;" fit="cover"></el-image>
                </div>
                <div class="view-content">
                    <template v-for="(page, index) in source.pages">
                        <van-row v-if="page.type === 'flexbox'" :key="index"
                                 :gutter="page.gutter" :justify="page.justify" style="min-height: 100px">
                            <van-col :span="24 / page.itemDataSourceList.length" v-for="(item,fIndex) in page.itemDataSourceList"
                                     :key="fIndex" style="min-height: 100px">
                                <div class="flex-basic" v-for="(flexItem, fmIndex) in item.pages" :key="fmIndex">
                                    <preview-item  :page="flexItem" :refresh-key="refreshKey"></preview-item>
                                </div>
                            </van-col>
                        </van-row>
                        <div v-if="page.type === 'form'">

                        </div>
                        <preview-item v-else :page="page" :refresh-key="refreshKey" :key="index"></preview-item>
                    </template>
                </div>
            </div>
        </div>
        <div slot="footer">
            <el-button @click="closeShow">关 闭</el-button>
        </div>
    </el-dialog>
</template>

<script>

	import PreviewItem from "./components/preview-item";
	export default {
		name: "drag-preview-index",
        components: {
			PreviewItem
        },
		data() {
			return {
				phone: require('../assets/phoneTopNav.png'),
                source: null,
			}
		},
		props: {
			pageSource: {
				type: Object,
				required: true
			},
			previewFlag: {
				type: Boolean,
				required: true,
				default: false
			},
			refreshKey: {
				type: Number,
				required: true,
                default: new Date().getTime()
            }
		},
        created() {
			this.source = JSON.parse(JSON.stringify(this.pageSource))
		},
		watch: {
			pageSource: {
				deep: true,
                handler: function (newVal) {
					this.source = JSON.parse(JSON.stringify(newVal))
				}
            }
        },
		methods: {
            //关闭预览
			closeShow() {
				this.$emit('close')
            }
        }
	}
</script>

<style lang="less" scoped>
    .top-nav {
        position: absolute;
        top: 0;
        background: #fff;
        z-index: 999;
    }
    .view-content {
        width: 400px;
        height: 700px;
        background: #f5f5f5;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 72px;
        box-shadow: 0 2px 6px #ccc;
    }
    .html-edit-area {
        width: auto;
        max-width: 400px;
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
    .flex-basic {
        width: 100%;
        min-height: 100px;
    }
</style>