<template>
	<view class="home_wrapper">
		<!-- 头部 -->
		<view v-if="shopInfo" class="header_wrapper" @click="goShopInfo">
			<img :src="shopInfo.image_path" alt="" class="tea_img" />
			<view class="water_station_info">
				<view class="water_station_name">{{shopInfo.name}}</view>
				<view class="water_station_sales_num">{{shopInfo.phone}}</view>
			</view>
			<image src="http://qnimage.xiteng.com/right_icon@2x.png" mode="" class="next_icon"></image>
		</view>
		<!-- 订单 -->
		<view class="orders_classify_wrapper">
			<!-- 模板中使用组件 -->
			<glanceSlideNavTabBar fontsize="16px" textcolor="#555555" activetextcolor="#FF8638" underlinecolor="#FF8638"
			 underlineheight="3px" underlinewidth="88px" topfixedval="0px" :topfixed="true" @clickitem="clickitem" :data="[
					{ textcontent: '全部' },
					{ textcontent: '待送货' },
					{ textcontent: '已完成' }
				]"></glanceSlideNavTabBar>
			<view class="order_details_list">
				<view class="shopitem" v-for="(shop, index) in orderList" :key="index" @click.stop="toOrderDetail(shop)">
					<view class="shop_header">
						<view class="order_shop_name">
							<!-- <image :src="shop.restaurant_image_url"></image> -->
							<view class="shop-info">
								<view class="header-text">订单号:{{ shop.id }}</view>
								<view class="time">{{ shop.formatted_created_at }}</view>
							</view>
						</view>
						<view class="order_status_des">{{ shop.status_bar.title }}</view>
					</view>
					<view class="shop_footer">
						<view class="price_info">
							{{shop.basket.group[0][0].name}} 共{{shop.basket.group[0].length}}件商品
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 空数据 -->
		<view v-if="orderList.length===0" class="empty-data-wrapper">
			<view class="empty-data-text">
				暂无订单
			</view>
		</view>
	</view>
</template>

<script>
	// 导入组件文件
	import glanceSlideNavTabBar from '@/components/home/glance-SlideNavTabBar.vue';
	import service from '../../service.js'

	import {
		mapState
	} from 'vuex'

	export default {
		computed: {
			...mapState(['forcedLogin', 'hasLogin', 'userInfo', 'shopInfo']),
			...mapState('shop', ['orderList']),
		},
		onLoad() {
			//加载用户信息
			const userInfo = service.getInfo();
			
			console.log('userInfo', userInfo);
			if (userInfo) {
				this.$store.commit('setInfo', userInfo);
				this.clickitem(0);
				this.$store.dispatch("fetchShopInfo");
				this.$store.dispatch('shop/fetchOrderList', {
					offset: 0,
					limit: 20,
					restaurant_id: userInfo.restaurant_id
				})
			} else {
				this.$store.commit('logout');
				this.goLogin();
			}
		},
		// 注入组件
		components: {
			glanceSlideNavTabBar
		},
		data() {
			return {
				commodityList: [1, 2, 3]
			};
		},
		methods: {
			toOrderDetail(shop){
				this.$store.commit('shop/setOrder', shop);
				uni.navigateTo({
					url:'/pages/orderAll/orderDetails'
				})
			},
			goLogin() {
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/register'
					});
				} else {
					uni.navigateTo({
						url: '../login/register'
					});
				}
			},
			clickitem(idx, val) {
				console.log('idx, val', idx, val);
				var orderStatus = "waiting_deal";
				if (idx === 0) {
					orderStatus = "waiting_deal";
				} else if (idx === 1) {
					orderStatus = "waiting_deal";
				} else {
					orderStatus = "waiting_deal";
				}
			},
			goShopInfo() {
				uni.navigateTo({
					url: "/pages/shop/storeApply"
				})
			},
			goOrderDetails(order) {
				this.$store.commit('shop/setOrder', order);
				uni.navigateTo({
					url: "../orderAll/orderDetails"
				})
			}
		}
	};
</script>

<style lang="less" scoped>
	.home_wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;

		.header_wrapper {
			width: 100%;
			height: 200upx;
			display: flex;
			flex-direction: row;
			padding: 20upx 28upx 20upx 24upx;
			box-sizing: border-box;
			align-items: center;
			border-bottom: 1upx solid #f3e1d5;

			.tea_img {
				width: 160upx;
				height: 160upx;
				border-radius: 50%;
				background-color: #E1E1E1;
			}

			.water_station_info {
				flex: 1;
				margin-left: 35upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.water_station_name {
				font-size: 32upx;
				color: #ff8638;
			}

			.water_station_sales_num {
				font-size: 28upx;
				color: #ff8638;
				margin-top: 40upx;
			}

			.next_icon {
				width: 14upx;
				height: 24upx;
			}

		}

		.orders_classify_wrapper {
			.order_details_list {
				background-color: #f2f2f2;
				width: 100%;
				.shopitem {
					padding: 14upx 20upx;
					border-radius: 10upx;
					background-color: #ffffff;
					box-sizing: border-box;
					margin-bottom: 10upx;
					.shop_header {
						display: flex;
						flex-direction: row;
						align-items: center;
						padding: 19upx;
						box-sizing: border-box;
						justify-content: space-between;
						border-bottom: 1upx #e0e0e0 solid;

						.order_shop_name {
							display: flex;
							flex-direction: row;
							align-items: center;
							height: 120upx;
							font-size: 24upx;

							image {
								width: 80upx;
								height: 80upx;
								margin-right: 20upx;
							}

							.shop-info {
								display: flex;
								flex-direction: column;

								.header-text {
									font-size: 28upx;
									font-family: PingFangSC-Regular;
									font-weight: 400;
									color: rgba(34, 34, 34, 1);
								}

								.time {
									font-size: 24upx;
									font-family: PingFangSC-Regular;
									font-weight: 400;
									color: #999;
								}
							}


						}

						.order_status_des {
							font-size: 28upx;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							color: rgba(62, 135, 235, 1);
						}
					}

					.shop_content {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 20upx;
						box-sizing: border-box;
						width: 100%;
						position: relative;

						.space_line {
							position: absolute;
							bottom: 1upx;
							width: calc(100% - 40upx);
							height: 1upx;
							background-color: #e0e0e0;
						}

						.product_container {
							display: flex;
							flex-direction: row;
							align-items: center;
							width: 100%;

							image {
								width: 140upx;
								height: 140upx;
							}

							.product_info {
								display: flex;
								flex: 1;
								height: 100upx;
								flex-direction: row;
								align-items: center;
								justify-content: space-between;
								margin-left: 20upx;

								.product_name {
									font-size: 26upx;
									font-family: PingFangSC-Regular;
									font-weight: 400;
									color: rgba(51, 51, 51, 1);
								}

								.product_price {
									font-size: 26upx;
									margin-right: 18upx;
									font-family: PingFangSC-Regular;
									font-weight: 400;
									color: rgba(34, 34, 34, 1);
								}
							}
						}
					}

					.shop_footer {
						height: 182upx;
						// background-color: #666;
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						align-items: flex-end;
						padding-right: 18upx;
						box-sizing: border-box;

						.price_info {
							font-size: 26upx;
							color: #444444;
							text-align: right;
						}

						.opt_info {
							margin-top: 30upx;
							font-size: 26upx;
							color: #444444;
							display: flex;
							flex-direction: row;
							justify-content: flex-end;
							padding-bottom: 40upx;
							box-sizing: border-box;

							.btn-one-more-order {
								width: 160upx;
								height: 60upx;
								border: 1upx solid rgba(187, 187, 187, 1);
								border-radius: 30upx;
								text-align: center;
								line-height: 60upx;
								margin-right: 20upx;
							}

							.btn-juegement {
								width: 120upx;
								height: 60upx;
								border: 1upx solid rgba(187, 187, 187, 1);
								border-radius: 30upx;
								text-align: center;
								line-height: 60upx;
							}
						}
					}
				}
			}
		}
	     
		 .empty-data-wrapper{
			 display: flex;
			 flex: 1;
			 flex-direction: row;
			 justify-content: center;
			 align-items: center;
			 font-size: 26upx;
			 color: #999;
		 }
	}
</style>
