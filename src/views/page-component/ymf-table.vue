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
    table.gridtable {
        font-family: verdana,arial,sans-serif;
        font-size:11px;
        color:#333333;
        border-width: 1px;
        border-color: #666666;
        border-collapse: collapse;
    }
    table.gridtable th {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #dedede;
    }
    table.gridtable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #666666;
        background-color: #ffffff;
    }
</style>