<template>
    <div style="cursor: move">
        <table style="width: 100%" class="gridtable">
            <tr>
                <th v-for="(item, index) in source.theadData" :key="index">{{ item.label }}</th>
            <tr/>
            <tr v-for="(item, index) in source.tdData" :key="index">
                <td v-for="(td, tIndex) in item.source" :key="tIndex" style="text-align: center">
                    {{td.label}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
	export default {
		name: "ymf-table",
		props:{
			source: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
    @import "../../../src/views/common/index.css";
</style>