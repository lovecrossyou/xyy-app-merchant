<template>
	<view class="main">
		<view class="header_bg">
			<view class="main_text">包装水行业备案小程序</view>
		</view>
		
		<view class="item">
			水厂备案录入
		</view>

		<view class="item">
			水站备案录入
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}

	.title {
		font-size: 50upx;
		color: #333333;
		padding: 30upx 0upx;
		margin-bottom: 120upx;
	}

	.header_bg {
		width: 100%;
		height: 400upx;
		background: url(http://qnimage.xiteng.com/banner@2x.png) no-repeat center center;
		background-size: 100% 100%;
		
		/* position: relative; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		margin-bottom: 20upx;
	}
	
	.main_text{
		color: #999999;
		font-size: 30upx;
		
	}

	.item {
		padding: 50upx 20upx;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		border: dashed 1upx #E1E1E1;
		font-size: 40upx;
		color: #333333;

		margin-bottom: 20upx;
	}
</style>
