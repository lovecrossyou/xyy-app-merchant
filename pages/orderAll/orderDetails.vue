<template>
	<view class="order_details_wrapper">
		<!-- 地址 -->
		<view class="top_address">
			<view class="person_address_info">
				<img src="http://static.kuaimayoupin.com/address@2x.png" style="width: 22upx;height: 30upx;" />
				<view class="address_text">{{order.deliverAddressInfo}}</view>
			</view>
			<view class="contacts_info_area">
				<img src="http://static.kuaimayoupin.com/lianxiren@2x.png" alt="" style="width: 22upx;height: 24upx;" />
				<view class="address_text">{{order.receiveName}}</view>
				<view class="address_text">{{order.receiveMobilePhone}}</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="buy_commodity_list">
			<block v-for="(item, index) in order.items" :key="index">
				<view class="commodity_area">
					<img :src='item.productImage' style="width: 114upx;height: 114upx;border-radius: 50%;" />
					<view class="order_info">
						<view class="commodity_name">{{item.productName}}</view>
						<view class="commodity_bottom">
							<view class="commodity_price">¥{{item.productPrice}}</view>
							<view class="commodity_num">x{{item.quantity}}</view>
						</view>
					</view>
					<view class="commodity_all_price">¥{{item.productPrice *item.quantity}}</view>
				</view>
			</block>
		</view>
		<!-- 订单详情 -->
		<view class="order_info_wrapper">
			<orderInfoTemplate textLeft="订单单号" :textRight="order.orderNo"></orderInfoTemplate>
			<orderInfoTemplate textLeft="下单时间" :textRight="order.createTime"></orderInfoTemplate>
			<orderInfoTemplate textLeft="优惠券" textRight="无"></orderInfoTemplate>
			<view class="order_details">
				<view class="text_left">实付款</view>
				<view class="text_right">¥{{order.price}}</view>
			</view>
		</view>

		<div class="footer">
			<view class="btn-send"   @click="confirmDeliver">发货</view>
		</div>
	</view>
</template>

<script>
	import orderInfoTemplate from '@/components/order/orderInfoTemplate.vue';
	import api from '@/util/api.js'
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState({
			order: state => state.shop.currentOrder
		}),
		data() {
			return {
				orderList: []
			};
		},
		components: {
			orderInfoTemplate
		},
		
		methods: {
			async confirmDeliver() {
				const res = await api.confirmDeliver({
					orderNo: this.order.orderNo
				});
				if(res.status === 'ok'){
					uni.showToast({
						title: res.message,
						mask: false,
						duration: 1500
					});
				}
			}
		}
	};
</script>

<style scoped>
	.order_details_wrapper {
		width: 100%;
		background-color: #f5f5f5;
		padding: 25upx;
		box-sizing: border-box;
	}

	.top_address {
		width: 100%;
		background-color: #fff;
		padding: 25upx 20upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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

	.buy_commodity_list {
		width: 100%;
		background-color: #fff;
		margin-top: 25upx;
		padding: 5upx 25upx 25upx 23upx;
		box-sizing: border-box;
	}

	.commodity_area {
		width: 100%;
		height: 115upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 35upx;
	}

	.order_info {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: 20upx;
	}

	.commodity_bottom {
		display: flex;
		flex-direction: row;
		margin-top: 12upx;
	}

	.commodity_all_price {
		width: 20%;
		text-align: right;
		color: #e64646;
		font-size: 28upx;
	}

	.commodity_price {
		color: #e64646;
		font-size: 24upx;
	}

	.commodity_num {
		color: #999;
		font-size: 20upx;
		margin-left: 20upx;
	}

	.order_info_wrapper {
		width: 100%;
		background-color: #fff;
		margin-top: 20upx;
		padding: 20upx;
		box-sizing: border-box;
	}

	.order_details {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 60upx;
		align-items: center;
		background-color: #fff;
	}

	.text_left {
		color: #999999;
		font-size: 24upx;
	}

	.text_right {
		color: #E53D3D;
		font-size: 28upx;
	}

	.commodity_name {
		color: #333333;
		font-size: 28upx;
	}
	
	.footer{
		display: flex;
		width: 100%;
		flex-direction: row;
		/* height: 120upx; */
		justify-content: flex-end;
		margin-top: 20upx;
	}
	
	.btn-send{
		width: 180upx;
		height: 60upx;
		background: #ff8638;
		text-align: center;
		line-height: 60upx;
		color: #FFFFFF;
		font-size: 26upx;
	}
</style>
