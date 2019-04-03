<template>
	<view class="withdraw_deposit_wrapper">
		<view class="header_bg_area">
			<img src="../../static/withdrawMoney/qian@2x.png" alt="" />
			<text class="balance_text">余额</text>
			<text class="balance_num">0.00</text>
		</view>
		<view><button class="balance_btn" @click="goBalance">提现</button></view>
		<view class="record_area">
			<view class="transaction_record" @click="transactionRecord">交易记录</view>
			<view class="balance_record" @click="balanceRecord">提现记录</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {},
	computed: {},
	methods: {
		transactionRecord(){
			uni.navigateTo({
				url:"./transactionRecord"
			})
		},
		balanceRecord(){
			uni.navigateTo({
				url:"./balanceRecord"
			})
		},
		goBalance(){
			uni.navigateTo({
				url:"./balancePage"
			})
		}
	}
};
</script>

<style scoped>
.withdraw_deposit_wrapper {
	width: 100%;
}
.header_bg_area {
	width: 100%;
	height: 270upx;
	background-color: #ff8638;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 26upx 0;
	box-sizing: border-box;
}
.header_bg_area > img {
	width: 116upx;
	height: 116upx;
}
.balance_text {
	color: #ffffff;
	font-size: 28upx;
}
.balance_num {
	color: #ffffff;
	font-size: 34upx;
	font-weight: 500;
}
.balance_btn {
	width: 510upx;
	height: 88upx;
	background: rgba(255, 134, 56, 1);
	border-radius: 6px;
	font-size: 28upx;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	margin-top: 168upx;
	line-height: 88upx;
	text-align: center;
}
.record_area{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 50upx;
	box-sizing: border-box;
}
.transaction_record{
	width: 120upx;
	color: #ff8638;
	font-size: 28upx;
	font-weight: 400;
	margin-top: 80upx;
	text-align: left;
}
.balance_record{
	width: 120upx;
	color: #ff8638;
	font-size: 28upx;
	font-weight: 400;
	margin-top: 80upx;
	text-align: right;
}

</style>
