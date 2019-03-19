<template>
	<view class="manage_wrapper">
		<manageList page="/pages/category/categoryList"  imgSrc="../../static/manage/label_icon@2x.png" titleText="分类管理" imgWidth="64px" imgHeight="64px"></manageList>
		<manageList page="/pages/product/productList"  imgSrc="../../static/manage/shangpingouwudai@2x.png" titleText="商品管理" imgWidth="64px" imgHeight="62px"></manageList>
		<manageList imgSrc="../../static/manage/yunyingshang@2x.png" titleText="营销管理" imgWidth="66px" imgHeight="52px"></manageList>
		<manageList page="/pages/employeesManage/employeesManage" imgSrc="../../static/manage/yuangongguanli@2x.png" titleText="员工管理" imgWidth="54px" imgHeight="66px"></manageList>
		<manageList imgSrc="../../static/manage/dingdan@2x.png" titleText="订单管理" imgWidth="62px" imgHeight="70px"></manageList>
		<manageList page="/pages/shop/shopinfo" imgSrc="../../static/manage/dianpu@2x.png" titleText="店铺管理" imgWidth="62px" imgHeight="62px"></manageList>
		<manageList imgSrc="../../static/manage/quan@2x.png" titleText="水票管理" imgWidth="76px" imgHeight="58px"></manageList>
		<manageList imgSrc="../../static/manage/tixian@2x.png" titleText="提现管理" imgWidth="64px" imgHeight="62px"></manageList>
		<view style="width: 23%;height: 160upx;margin: 0 15px 40px 15px"></view>
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
	},
	methods:{
		
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
