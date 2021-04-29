<template>
    <div>
        <div class="top-nav">
            <el-image :src="phone" style="width: 100%;" fit="cover"></el-image>
        </div>
        <div class="view-content">
            <drag-page :pageSource="pageSource"></drag-page>
        </div>
    </div>
</template>

<script>

    import DragPage from './drag-page'
	export default {
		name: "drag-content-page",
        props: {
		    pageSource: {
		    	type: Object,
                required: true
            }
        },
        components: {
			DragPage
        },
        watch:{
			pageSource:{
				deep: true,
                handler: function (newValue) {
                    // console.log('source:', newValue)
				}
            }
        },
        data() {
		    return {
				phone: require('../../assets/phoneTopNav.png')
            }
        },
        methods: {

        }
	}
</script>

<style lang="less" scoped>
    .top-nav {
        position: absolute;
        top: 0;
        background: #fff;
        z-index: 999;
        transition: 0.3s;
    }
    .top-nav:hover {
        transform: scale(0.95);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 10px #afafaf;
    }
    .view-content {
        width: 400px;
        height: 700px;
        background: #f5f5f5;
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 72px;
        box-shadow: 0 2px 6px #ccc;
    }

</style>