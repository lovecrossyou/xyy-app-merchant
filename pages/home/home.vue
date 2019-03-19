<template>
	<view class="home_wrapper">
		<!-- 头部 -->
		<view class="header_wrapper" @click="goShopInfo">
			<img src="http://img0.imgtn.bdimg.com/it/u=440953885,2173090427&fm=11&gp=0.jpg" alt="" class="tea_img" />
			<view class="water_station_info">
				<view class="water_station_name">小贝水站</view>
				<view class="water_station_sales_num">销量：500+</view>
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
				<!-- 地址 -->
				<view class="person_info_area">
					<view class="person_address_info">
						<img src="http://static.kuaimayoupin.com/address@2x.png" style="width: 22upx;height: 30upx;" />
						<view class="address_text">北京市朝阳区安贞门神新家园562号楼4单元230</view>
					</view>
					<view class="contacts_info_area">
						<img src="http://static.kuaimayoupin.com/lianxiren@2x.png" alt="" style="width: 22upx;height: 24upx;" />
						<view class="address_text">任艳彤</view>
						<view class="address_text">18356248596</view>
					</view>
				</view>
				<!-- 商品 -->
				<view class="commodity_list_wrapper" @click="goOrderDetails">
					<blocl v-for="(item, index) in commodityList" :key="index">
						<view class="commodity_details">
							<img src="http://img4.imgtn.bdimg.com/it/u=93266979,2836087381&fm=11&gp=0.jpg" alt="" style="width:112upx;height:112upx;border:1px solid rgba(210,210,210,1);border-radius: 50%;" />
							<view class="commodity_info">
								<view class="commodity_name">紫砂壶</view>
								<view class="commodity_buy_num">x4</view>
							</view>
						</view>
					</blocl>

					<image src="http://qnimage.xiteng.com/right_icon@2x.png" mode="" class="next_icon"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入组件文件
	import glanceSlideNavTabBar from '@/components/home/glance-SlideNavTabBar.vue';

	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
		    if (!this.hasLogin) {
		        uni.showModal({
		            title: '未登录',
		            content: '您未登录，需要登录后才能继续',
		            /**
		             * 如果需要强制登录，不显示取消按钮
		             */
		            showCancel: !this.forcedLogin,
		            success: (res) => {
		                if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
		                    if (this.forcedLogin) {
		                        uni.reLaunch({
		                            url: '../login/login'
		                        });
		                    } else {
		                        uni.navigateTo({
		                            url: '../login/login'
		                        });
		                    }
		                }
		            }
		        });
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
			clickitem(idx, val) {

			},
			goShopInfo() {
				uni.navigateTo({
					url: "/pages/shop/shopinfo"
				})
			},
			goOrderDetails() {
				uni.navigateTo({
					url: "../orderAll/orderDetails"
				})
			}
		}
	};
</script>

<style scoped>
	.home_wrapper {
		width: 100%;
	}

	.header_wrapper {
		width: 100%;
		height: 200upx;
		display: flex;
		flex-direction: row;
		padding: 20upx 28upx 20upx 24upx;
		box-sizing: border-box;
		align-items: center;
		border-bottom: 1upx solid #f3e1d5;
	}

	.tea_img {
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
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

	.orders_classify_wrapper {
		margin-top: 10upx;
	}

	.order_details_list {
		width: 100%;
		padding: 0 30upx 20upx 30upx;
		box-sizing: border-box;
	}

	.person_info_area {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.person_address_info,
	.contacts_info_area {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.contacts_info_area {
		margin-top: 10upx;
	}

	.address_text {
		font-size: 28upx;
		color: #555555;
		margin-left: 15upx;
	}

	.commodity_list_wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 18upx;
		align-items: center;
	}

	.commodity_details {
		width: 152upx;
		height: 186upx;
		box-shadow: 8upx 8upx 10upx #f3f7ff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.commodity_info {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 12upx;
		align-items: center;
	}

	.commodity_name {
		color: #333;
		font-size: 28upx;
	}

	.commodity_buy_num {
		color: #999;
		font-size: 24upx;
	}
</style>
