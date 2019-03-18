<template>
	<view class="list_wrapper">
		<img :src="imgSrc" v-bind:style="{ width: imgWidth, height: imgHeight }">
		<text class="item_text">{{title}}</text>
		<img src="http://qnimage.xiteng.com/right_icon@2x.png" style="width: 14upx;height: 22upx;">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			imgWidth:String,
			imgHeight:String,
			title:String,
			imgSrc:String
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
	.list_wrapper{
		width: 100%;
		height: 88upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.item_text{
		flex: 1;
		color: #333333;
		font-size: 30upx;
		margin-left: 20upx;
	}
</style>
