<template>
	<view class="transaction_record_wrapper">
		<view class="transaction_top_area">
			<view class="transaction_date">2019年3月</view>
			<view class="transaction_info">
				<view class="expenditure">总提现额¥5623.00</view>
			</view>
		</view>
		<block v-for="(transaction,index) in transactionList" :key="index">
			<view class="transaction_details_list">
				<img
					src="../../static/withdrawMoney/50@2x.png"
					class="pro_img"
				/>
				<view class="transaction_left">
					<view class="buy_shop_name">余额提现-浦发银行(4703)</view>
					<view class="buy_date">11月2日 09:23</view>
				</view>
				<view class="buy_money">50000</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			transactionList:[1,2,3]
		};
	},
	components: {},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.transaction_record_wrapper {
	width: 100%;
}
.transaction_top_area {
	width: 100%;
	height: 100upx;
	background: rgba(245, 245, 245, 1);
	padding: 15upx 25upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 25upx;
}
.transaction_date {
	color: #333333;
	font-size: 24upx;
	font-weight: 500;
}
.transaction_info {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.expenditure,
.income {
	color: #999999;
	font-size: 22upx;
}
.income {
	margin-left: 20upx;
}
.transaction_details_list {
	width: 100%;
	height: 88upx;
	padding:0 25upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.pro_img {
	width: 58upx;
	height: 58upx;
	border-radius: 50%;
}
.transaction_left {
	display: flex;
	flex-direction: column;
	margin-left: 20upx;
	justify-content: space-between;
	flex: 1;
}
.buy_shop_name {
	color: #555;
	font-size: 22upx;
}
.buy_date {
	color: #bfbfbf;
	font-size: 20upx;
}
.buy_money {
	width: 30%;
	color: #ff8638;
	font-size: 28upx;
	text-align: right;
}
</style>
