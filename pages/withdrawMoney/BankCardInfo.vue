<template>
	<view class="bank_card_info_wrapper">
		<view class="top_hint">请绑定持卡人 本人的银行卡</view>
		
		<view class="write_bank_card_info">
			<view class="left_text">持卡人</view>
			<input type="text" value="" placeholder="请输入" focus="true"/>
		</view>
		<view class="write_bank_card_info">
			<view class="left_text">卡号</view>
			<input type="number" value="" placeholder="请输入"/>
		</view>
		<view class="write_bank_card_info">
			<view class="left_text">银行</view>
			<input type="text" value="" placeholder="未填写"/>
		</view>
		<view class="write_bank_card_info">
			<view class="left_text">卡类型</view>
			<input type="text" value="" placeholder="未填写"/>
		</view>
		<view class="write_bank_card_info">
			<view class="left_text">手机号</view>
			<input type="number" value="" placeholder="请输入银行预留手机号"/>
		</view>
		<button type="primary" @click="goAddEmp">添加</button>
	</view>
	
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.bank_card_info_wrapper {
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.top_hint {
	width: 100%;
	height: 80upx;
	background: rgba(255, 134, 56, 1);
	color: #fff;
	font-size: 28upx;
	line-height: 80upx;
	padding-left: 25upx;
	box-sizing: border-box;
	margin-bottom: 20upx;
}
.write_bank_card_info{
	width: 100%;
	height: 88upx;
	display: flex;
	flex-direction: row;
	padding-left:25upx ;
	box-sizing: border-box;
	align-items: center;
}
.left_text{
	width: 85upx;
	color: #555555;
	font-size: 28upx;
	text-align: left;
	
}
.write_bank_card_info > input{
	flex: 1;
	margin-left: 23upx;
	color: #555;
	font-size: 24upx;
}
.bank_card_info_wrapper > button {
	width:94%;
	height: 88upx;
	background: #FF8638;
	border-radius: 6upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	position: absolute;
	bottom: 50upx;
}
</style>
