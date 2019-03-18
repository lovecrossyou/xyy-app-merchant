<template>
	<view class="manage_wrapper">
		<manageList imgSrc="../../static/manage/label_icon@2x.png" titleText="分类管理" imgWidth="64upx" imgHeight="64upx"></manageList>
		<manageList imgSrc="../../static/manage/shangpingouwudai@2x.png" titleText="商品管理" imgWidth="64upx" imgHeight="62upx"></manageList>
		<manageList imgSrc="../../static/manage/yunyingshang@2x.png" titleText="营销管理" imgWidth="66upx" imgHeight="52upx"></manageList>
		<manageList imgSrc="../../static/manage/yuangongguanli@2x.png" titleText="员工管理" imgWidth="54upx" imgHeight="66upx"></manageList>
		<manageList imgSrc="../../static/manage/dingdan@2x.png" titleText="订单管理" imgWidth="62upx" imgHeight="70upx"></manageList>
		<manageList imgSrc="../../static/manage/dianpu@2x.png" titleText="店铺管理" imgWidth="62upx" imgHeight="62upx"></manageList>
		<manageList imgSrc="../../static/manage/quan@2x.png" titleText="水票管理" imgWidth="76upx" imgHeight="58upx"></manageList>
		<manageList imgSrc="../../static/manage/tixian@2x.png" titleText="提现管理" imgWidth="64upx" imgHeight="62upx"></manageList>
		<view style="width: 23%;height: 160upx;margin: 0 15upx 40upx 15upx"></view>
	</view>
</template>

<script>
import manageList from '@/components/manage/manageList.vue';
export default {
	data() {
		return {};
	},
	components: {
		manageList
	}
};
</script>

<style scoped>
.manage_wrapper {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 40upx 25upx;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-content:flex-start
}
</style>
