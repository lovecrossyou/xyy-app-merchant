<template>
	<view class="product_describe_wrapper">
		<textarea value="" placeholder="请输入您的宝贵意见" class="writ_describe" />
		<button type="primary">提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.product_describe_wrapper {
	width: 100%;
	padding: 30upx 25upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
.writ_describe {
	width: 100%;
	height: 386upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 30px 0px rgba(219, 219, 219, 0.5);
	border-radius: 6px;
	border: 1px solid rgba(236, 236, 236, 1);
	padding: 16upx;
	box-sizing: border-box;
	color: #999;
	font-size: 28upx;
}
.product_describe_wrapper > button {
	width:94%;
	height: 88upx;
	background: rgba(255, 134, 56, 1);
	border-radius: 6upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	position: absolute;
	bottom: 30upx;
}
</style>
