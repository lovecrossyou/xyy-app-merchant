<template>
	<view class="wrapper">
		<view class="title_text">{{ title }}</view>
		<image
			src="../../static/category/bianji@2x.png"
			mode=""
			class="change_img_icon"
			@click="addCategory"
		></image>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		title: String
	},
	components: {},
	computed: {},
	methods: {
		addCategory() {
			uni.navigateTo({
				url: '../category/addCategory'
			});
		}
	}
};
</script>

<style scoped>
.wrapper {
	width: 100%;
	height: 90upx;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1upx solid #ebebeb;
}
.change_img_icon {
	width: 24upx;
	height: 28upx;
}
.title_text {
	color: #ff8638;
	font-size: 28upx;
}
</style>
