<template>
	<view class="withdraw_wrapper">
		<!-- 选择银行卡 -->
		<view class="bank_choose_area" @click="chooseBankCard">
			<view class="left_text">到银行卡</view>
			<view class="center_area">
				<view class="bank_from">
					<img
						src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2045554328,1031624805&fm=27&gp=0.jpg"
						class="bank_img"
					/>
					<view class="bank_name">浦发银行（4703）</view>
				</view>
				<view class="arrive_date">1个工作日内到账</view>
			</view>
			<img src="http://qnimage.xiteng.com/right_icon@2x.png" class="next_icon" />
		</view>
		<!-- 提现金额 -->
		<view class="withdraw_money">
			<view class="title_text">提现金额</view>
			<view class="withdraw_money_write">
				<view class="rmb_symbol">¥</view>
				<input type="number" value="" focus="true" />
			</view>
			<!-- 余额显示 -->
			<view class="remaining_sum_area">
				<view class="remaining_sum_show">余额¥25653.00，</view>
				<view class="all_withdraw">全部提现</view>
			</view>

			<button class="withdraw_btn">提现</button>
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
		chooseBankCard(){
			uni.navigateTo({
				url:"./BankCardInfo"
			})
		}
	}
};
</script>

<style scoped>
.withdraw_wrapper {
	width: 100%;
	padding: 35upx 25upx;
	box-sizing: border-box;
}
.bank_choose_area {
	background-color: #f5f5f5;
	display: flex;
	flex-direction: row;
	padding: 18upx 25upx;
	box-sizing: border-box;
	align-items: center;
}
.left_text {
	color: #555555;
	font-size: 26upx;
}
.center_area {
	flex: 1;
	margin-left: 40upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.bank_from {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.bank_img {
	width: 33upx;
	height: 33upx;
	border-radius: 50%;
	margin-right: 13upx;
}
.bank_name {
	color: #555555;
	font-size: 26upx;
}
.arrive_date {
	color: #999;
	font-size: 22upx;
	width: 50%;
	text-align: center;
	margin-top: 10upx;
}
.next_icon {
	width: 14upx;
	height: 24upx;
}
.withdraw_money {
	width: 100%;
	height: 500upx;
	background-color: #fafafa;
	padding: 30upx 25upx;
	box-sizing: border-box;
}
.title_text {
	color: #444;
	font-size: 28upx;
	font-weight: 400;
}
.withdraw_money_write {
	width: 100%;
	border-bottom: 1px solid rgba(228, 228, 228, 1);
	display: flex;
	flex-direction: row;
	margin-top: 13upx;
	align-items: center;
}
.rmb_symbol {
	color: #333333;
	font-size: 100upx;
	font-weight: 500;
}
.withdraw_money_write > input {
	flex: 1;
	height: 100%;
	margin-left: 20upx;
	font-size: 88upx;
}
.remaining_sum_area {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 30upx;
}
.remaining_sum_show {
	color: #999999;
	font-size: 24upx;
}
.all_withdraw {
	color: #ff8638;
	font-size: 24upx;
}
.withdraw_btn {
	width: 342upx;
	height: 80upx;
	background: rgba(255, 134, 56, 1);
	border-radius: 6upx;
	font-size: 24upx;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	line-height: 80upx;
	text-align: center;
	margin-top: 60upx;
}
</style>
