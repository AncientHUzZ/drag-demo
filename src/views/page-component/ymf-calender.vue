<template>
    <div>
        <div style="width: 100%;height: 50px;position: absolute;z-index: 99999;cursor: move"></div>
        <van-field
                readonly

                name="calendar"
                :value="source.value"
                :label="source.title"
                :placeholder="source.placeholder"
        />
        <van-calendar v-model="showCalendar"
                      :type="source.calenderType"
                      :min-date="source.minDate"
                      :max-date="source.maxDate"
                      :default-date="source.defaultDate"
                      @confirm="onConfirm" />
    </div>
</template>

<script>
	export default {
		name: "ymf-calender",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        data() {
		    return {
				showCalendar: false
            }
        },
        created() {
			this.onConfirm(this.source.defaultDate)
		},
		methods: {
			formatSingleDate(date) {
				return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			},
			onConfirm(date) {
                this.showCalendar = false
                if (date) {
					this.source.value = this.formatSingleDate(date)
                }

            }
        }
	}
</script>

<style lang="less" scoped>
    /deep/.van-cell {
        cursor: move;
    }
</style>