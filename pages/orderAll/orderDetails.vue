<template>
	<view class="order_details_wrapper">
		<!-- 地址 -->
		<view class="top_address">
			<view class="person_address_info">
				<img
					src="../../static/address/address@2x.png"
					style="width: 22upx;height: 30upx;"
				/>
				<view class="address_text">北京市朝阳区安贞门神新家园562号楼4单元230</view>
			</view>
			<view class="contacts_info_area">
				<img
					src="../../static/address/lianxiren@2x.png"
					alt=""
					style="width: 22upx;height: 24upx;"
				/>
				<view class="address_text">任艳彤</view>
				<view class="address_text">18356248596</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="buy_commodity_list">
			<block v-for="(item, index) in orderList" :key="index">
				<view class="commodity_area">
					<img
						src="http://img4.imgtn.bdimg.com/it/u=93266979,2836087381&fm=11&gp=0.jpg"
						style="width: 114upx;height: 114upx;border-radius: 50%;"
					/>
					<view class="order_info">
						<view class="commodity_name">紫砂壶</view>
						<view class="commodity_bottom">
							<view class="commodity_price">¥25.00</view>
							<view class="commodity_num">x5</view>
						</view>
					</view>
					<view class="commodity_all_price">¥100.00</view>
				</view>
			</block>
		</view>
		<!-- 订单详情 -->
		<view class="order_info_wrapper">
			<orderInfoTemplate textLeft="订单详情" textRight="75112203108246"></orderInfoTemplate>
			<orderInfoTemplate textLeft="下单时间" textRight="2018.10.12 12:00"></orderInfoTemplate>
			<orderInfoTemplate textLeft="优惠券" textRight="无"></orderInfoTemplate>
			<view class="order_details">
				<view class="text_left">实付款</view>
				<view class="text_right">¥200.00</view>
			</view>
		</view>
	</view>
</template>

<script>
import orderInfoTemplate from '@/components/order/orderInfoTemplate.vue';
export default {
	data() {
		return {
			orderList: [1, 2, 3]
		};
	},
	components: {
		orderInfoTemplate
	},
	computed: {},
	methods: {}
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
	padding: 22upx 16upx;
	box-sizing: border-box;
}
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
		color: #E53D3D;
		font-size: 28upx;
	}
	.commodity_name{
		color: #333333;
		font-size: 28upx;
		}
</style>
