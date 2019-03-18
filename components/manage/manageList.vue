<template>
	<view class="option_item" @click="handler">
		<img :src="imgSrc" alt="" v-bind:style="{width:imgWidth,height:imgHeight}">
		<view class="option_text">{{titleText}}</view>
	</view>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {

			};
		},
		props: {
			imgSrc: String,
			titleText: String,
			imgWidth: String,
			imgHeight: String,
			page:String
		},
		components: {},
		computed: {},
		methods: {
// 			goProduct:function(){
// 				uni.navigateTo({
// 					url:"/pages/product/productList"
// 				})
// 			},
// 			goCategory:function(){
// 				uni.navigateTo({
// 					url:"/pages/category/categoryList"
// 				})
// 			},
			handler:function(){
				uni.navigateTo({
					url:this.page
				})
			}
		}
	};
</script>

<style scoped>
	.option_item {
		width: 23%;
		height: 160upx;
		background: #fff;
		box-shadow: 0px 0px 18px 0px rgba(193, 223, 255, 0.5);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 25upx;
		box-sizing: border-box;
		margin: 0 15upx 60upx 15upx;
	}

	.option_text {
		color: #FF8638;
		font-size: 24upx;
		margin-top: 16upx;
	}
</style>
