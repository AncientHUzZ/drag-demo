<template>
    <div style="width: 400px">
<!--        <div v-for="(page, index) in pageSource.pages">-->
<!--            <div class="page-item" :key="index" :class="{'select-active':selectedPageItem && selectedPageItem.uuid === page.uuid}"-->
<!--                 v-on:click.stop="selectCurrentItem(page)">-->
<!--                <p><span>{{ index }}</span><span>{{ page.title }}</span></p>-->
<!--            </div>-->
<!--        </div>-->
        <el-collapse>
            <el-collapse-item v-for="(page, index) in pageSource.pages" :key="index"
                              :disabled="page.type !== 'form' && page.type !== 'flexbox'">
                <template slot="title">
                    <span class="radio-custom" v-if="page.type === 'form' || page.type === 'flexbox'">{{ page.title }}</span>
                    <el-radio v-else v-model="linkage" :label="page">{{ page.title }}</el-radio>
                </template>
                <div v-if="page.type === 'form' || page.type === 'flexbox'">
                    <div v-if="page.type === 'form'">
                        <div v-for="(form, pIndex) in page.itemDataSource.pages" :key="pIndex">
                            <el-radio v-model="linkage" :label="form" style="margin-left: 30px">{{ form.title }}</el-radio>
                            <el-divider></el-divider>
                        </div>
                    </div>
                    <div v-if="page.type === 'flexbox'">
                        <el-collapse>
                            <el-collapse-item v-for="(flex, lIndex) in page.itemDataSourceList" :key="lIndex">
                                <template slot="title">
                                    <span class="radio-custom" style="margin-left: 30px">第{{lIndex + 1}}区块</span>
                                </template>
                                <div v-for="(flexItem, fIndex) in flex.pages" :key="fIndex">
                                    <el-radio v-model="linkage" :label="flexItem" style="margin-left: 60px">{{ flexItem.title }}</el-radio>
                                    <el-divider></el-divider>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
	export default {
		name: "linkage-page",
		props:{
			pageSource: {
				type: Object,
				required: true
			}
		},
        data() {
			return {
				selectedPageItem: null,
				linkage: null
            }
        },
        methods: {
			selectCurrentItem(page) {
				this.selectedPageItem = page
            }
        }
	}
</script>

<style lang="less" scoped>
    .select-active {
        border: 1px solid #FA4B1E;
    }
    /deep/ .el-divider--horizontal {
        margin: 12px 0;
        color: #EBEEF5;
    }
    .radio-custom {
        font-size: 14px;
        color: #606266
    }
</style>