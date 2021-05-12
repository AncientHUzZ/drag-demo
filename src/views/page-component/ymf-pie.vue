<template>
    <div>
        <o-chart :data="source.data" :legend="source.legend" :key="refreshKey">
            <o-pie :pie-label="pieLabel()" position="label*value"></o-pie>
        </o-chart>
    </div>
</template>

<script>
	export default {
		name: "ymf-pie",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
		watch:{
			source:{
				deep: true,
				handler: function (newValue) {
					if (newValue) {
						this.countAll(newValue.data)
                        this.refreshKey = new Date().getTime()
					}
				}
			}
		},
        data() {
			return {
				percent: 0,
                refreshKey: new Date().getTime()
            }
        },
        created(){
			this.countAll(this.source.data)
        },
        methods: {
			countAll(list) {
				this.percent = 0
				if(list.length > 0) {
					list.forEach((item) => {
						this.percent += item.value
					})
				}
            },
			pieLabel() {
				let _this = this
				return {
					sidePadding: 30,
					activeShape: true,
					label1: function (data) {
						return {
							text: data.label + ' ' + (data.value/_this.percent * 100).toFixed(2) + '%',
							fill: "#343434",
							fontWeight: "bold"
						};
					}
				}
			}
		}
	}
</script>

<style scoped>

</style>