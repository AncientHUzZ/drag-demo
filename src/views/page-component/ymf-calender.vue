<template>
    <div>
        <van-field
                readonly
                clickable
                name="calendar"
                :value="source.value"
                :label="source.title"
                :placeholder="source.placeholder"
                @click="showCalendar = true"
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