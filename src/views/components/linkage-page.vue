<template>
    <div style="width: 400px">
        <el-collapse>
            <el-collapse-item v-for="(page, index) in pageSource.pages" :key="index"
                              :disabled="page.type !== 'form' && page.type !== 'flexbox'">
                <template slot="title">
                    <span class="radio-custom" v-if="page.type === 'form' || page.type === 'flexbox'">{{ page.title }}</span>
                    <el-radio v-else v-model="linkage" :label="page" :disabled="checkLinkable(page)">{{ page.title }}</el-radio>
                </template>
                <div v-if="page.type === 'form' || page.type === 'flexbox'">
                    <div v-if="page.type === 'form'">
                        <div v-for="(form, pIndex) in page.itemDataSource.pages" :key="pIndex">
                            <el-radio v-model="linkage" :label="form" :disabled="checkLinkable(form)"
                                      style="margin-left: 30px">{{ form.title }}</el-radio>
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
                                    <el-radio v-model="linkage" :label="flexItem" :disabled="checkLinkable(flexItem)"
                                              style="margin-left: 60px">{{ flexItem.title }}</el-radio>
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
				linkableList:['switch', 'picker', 'radio', 'checkbox'],
				linkage: null
            }
        },
        computed: {
		    currentId () {
		    	return this.$store.state.selectedItemToLink.uuid
            }
        },
        watch: {
			linkage(newVal) {
				if (newVal) {
					this.$emit('change', newVal)
                }
            }
        },
        methods: {
            clear() {
				this.linkage = null
            },
            checkLinkable(page) {
            	if (page.uuid === this.currentId) {
            		return true
                } else {
					return !this.linkableList.includes(page.type)
                }

            }
        }
	}
</script>

<style lang="less" scoped>
    .select-active {
        border: 1px solid #FA4B1E;
    }
    /deep/ .el-divider--horizontal {
        margin: 0;
        color: #EBEEF5;
    }
    .radio-custom {
        font-size: 14px;
        color: #606266
    }
    /deep/ .el-radio {
        line-height: 48px;
    }
    /deep/ .el-collapse-item__content {
        padding-bottom: 0;
    }
</style>