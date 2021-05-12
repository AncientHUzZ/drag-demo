<template>
    <div>
        <div style="width: 100%;height: 50px;position: absolute;z-index: 1000;cursor: move"></div>
        <van-field
                readonly

                name="picker"
                :value="source.value"
                :label="source.title"
                :placeholder="source.placeholder"
        />
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="options"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
            >
            </van-picker>
        </van-popup>
    </div>
</template>

<script>
	export default {
		name: "ymf-picker",
		props:{
			source: {
				type: Object,
				required: true
			}
		},
        data() {
			return {
				showPicker: false,
            }
        },
        computed:{
			options() {
				let options = []
                this.source.options.forEach(item => {
                	options.push(item.label)
                })
				return options
            }
        },
        methods: {
			onConfirm(value) {
				this.source.value = value;
				this.showPicker = false;
			}
        }
	}
</script>

<style lang="less" scoped>
    /deep/.van-cell {
        cursor: move;
    }
</style>