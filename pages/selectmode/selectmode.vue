<template>
	<view class="main">
		<view class="header_bg">
			<view class="main_text">包装水行业备案</view>
		</view>

		<button @getuserinfo="getUserInfoForFactory" open-type="getUserInfo" class="item">
			水厂备案录入
		</button>

		<button @getuserinfo="getUserInfoForWaterStore" open-type="getUserInfo" class="item">
			水站备案录入
		</button>

		<button @getuserinfo="getUserInfoForMarket" open-type="getUserInfo" class="item">
			社区店备案录入
		</button>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	import api from '@/util/api.js'
	
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapMutations(['appendCode','setShopInfo']),
			async checkFactory(code){
				const factory = await api.checkFactory(code);
				if(factory){
					// 已经录入
					this.setShopInfo(factory);
				}
				this.doCreateFactory();
			},
			async checkShop(code){
				const shop = await api.checkShop(code);
				if(shop){
					// 已经录入
					this.setShopInfo(shop);
				}
				this.doCreateShop();
			},
			async checkWaterShop(code){
				const shop = await api.checkShop(code);
				if(shop){
					// 已经录入
					this.setShopInfo(shop);
				}
				this.doWaterShop();
			},
			getUserInfoForFactory(e) {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						const {code} = loginRes;
						that.appendCode(code);
						that.checkFactory(code);
					}
				});
			},
			getUserInfoForWaterStore(e) {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						const {code} = loginRes;
						that.appendCode(code);
						that.checkWaterShop(code)
					}
				});
			},
			getUserInfoForMarket(e) {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						const {code} = loginRes;
						that.appendCode(code);
						that.checkShop(code)
					}
				});
			},
			// 开店  
			doCreateShop() {
				uni.navigateTo({
					url: "/pages/shop/storeApply"
				});
			},
			doCreateFactory() {
				uni.navigateTo({
					url: "/pages/shop/factoryApply"
				});
			},
			doWaterShop() {
				uni.navigateTo({
					url: "/pages/shop/waterShopApply"
				});
			}
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

	.main_text {
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
