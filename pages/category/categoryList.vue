<template>
	<view class="wrapper">
		<view class="category_list">
			<categoryListTemplate title="生活用品"></categoryListTemplate>
			<categoryListTemplate title="酒水"></categoryListTemplate>
			<categoryListTemplate title="水果"></categoryListTemplate>
			<categoryListTemplate title="蔬菜"></categoryListTemplate>
			<categoryListTemplate title="药"></categoryListTemplate>
		</view>
		<button type="primary" class="add_category_btn">添加分类</button>
	</view>
</template>

<script>
import categoryListTemplate from '@/pages/category/components/categoryListTemplate.vue';
export default {
	data() {
		return {};
	},
	components: {
		categoryListTemplate
	},
	computed: {},
	methods: {}
};
</script>

<style scoped>
	.wrapper{
		width: 100%;
		padding: 0 25upx;
		box-sizing: border-box;	
		position: relative;
	}
.category_list {
	width: 100%;
	padding: 25upx 0;
	box-sizing: border-box;
	background-color: #fff;
}
.add_category_btn {
	width: 94%;
	height: 88upx;
	background: #FF8638;
	border-radius: 6upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	position: absolute;
	bottom: 30upx;
}
</style>
