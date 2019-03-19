<template>
	<view class="main">
		<!-- 底部footer -->
		<div class="footer" @click="addProduct">
			<div class="button">添加商品</div>
		</div>
	</view>
</template>

<script>
	export default{
		methods:{
			addProduct(){
				uni.navigateTo({
					url:"/pages/product/product"
				})
			}
		}
	}
</script>

<style>
	.main{
		width: 100%;
		padding: 0 25upx;
		box-sizing: border-box;
		position: relative;
	}
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}
	
	.button {
		background-color: #FF8638;
		height: 88upx;
		border-radius: 6upx;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		width: 95%;
		margin-bottom: 20upx;
	}
</style>
