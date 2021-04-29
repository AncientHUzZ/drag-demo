<template>
    <div style="cursor: move">
        <table style="width: 100%" border="0" cellspacing="0" cellpadding="0">
            <thead>
                <th v-for="(item, index) in source.theadData" :key="index">{{ item }}</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in source.tdData" :key="index">
                    <td v-for="(td, tIndex) in item.source" :key="tIndex" style="text-align: center">
                        {{td}}
                    </td>
                </tr>
            </tbody>
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

<style scoped>

</style>