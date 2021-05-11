<template>
    <div>
        <o-chart :data="source.data" :legend="source.legend" :tooltip="tooltip" ref="line">
            <o-line :type="source.lineType" :shape="source.shape"  :position="'label*value'"></o-line>
        </o-chart>
    </div>
</template>

<script>
	export default {
		name: "ymf-line",
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
		    		console.log(newValue)
                    if (newValue) {
                    	this.$refs.line.repaint()
                        this.$forceUpdate()
                    }
				}
            }
        },
        data() {
			return {
				tooltip: {
					custom: true,
					showXTip: true,
					showYTip: true,
					snap: true,
					crosshairsType: "xy",
					crosshairsStyle: {
						lineDash: [2]
					}
                }
            }
        }
	}
</script>

<style scoped>

</style>