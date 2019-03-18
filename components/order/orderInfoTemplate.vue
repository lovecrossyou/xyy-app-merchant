<template>
	<view class="order_details">
		<view class="text_left">{{textLeft}}</view>
		<view class="text_right">{{textRight}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			textLeft:String,
			textRight:String,
		},
		components: {
			
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.order_details{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 60upx;
		align-items: center;
		background-color: #fff;
	}
	.text_left{
		color: #999999;
		font-size: 24upx;
	}
	.text_right{
		color: #555555;
		font-size: 28upx;
	}
</style>
