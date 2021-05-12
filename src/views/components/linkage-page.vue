<template>
    <div style="width: 400px">
        <div v-for="(page, index) in pageSource.pages">
            <div class="page-item" :key="index" :class="{'select-active':selectedPageItem && selectedPageItem.uuid === page.uuid}"
                 v-on:click.stop="selectCurrentItem(page)">
                <p><span>{{ index }}</span><span>{{ page.title }}</span></p>
            </div>
        </div>
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
				selectedPageItem: null
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
</style>