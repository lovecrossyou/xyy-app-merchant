<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">
			<view class="basic_msg_text">基本信息（必填）</view>
			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">门店信息</view>
					<input type="text" value="" placeholder="请与门脸照上名称一致" />
				</view>
				<view class="input_cont">
					<view class="left_text">联系人电话</view>
					<input type="text" value="" placeholder="请填写手机号" />
				</view>
				<view class="input_cont">
					<view class="left_text">门店分类</view>
					<view class="center_text">请选择</view>
					<image src="../../static/shop/xiala@2x.png" mode="" class="next_icon"></image>
				</view>
				<view class="input_cont">
					<view class="left_text">门店地址</view>
					<view class="center_text">请填写门店详细地址</view>
					<image src="../../static/shop/shouhuodizhi@2x.png" mode="" class="address_icon"></image>
				</view>
			</view>
		</view>
		<!-- 门店照片 -->
		<view class="store_imgs">
			<view class="basic_msg_text" style="margin-top: 20upx;">门店照片（必填）</view>
			<view class="uploading_img_item" style="border: none;">
				<view class="left_title">门脸照</view>
				<image src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">一张真实的门店照可提升店铺 形象</view>
			</view>
			<view class="uploading_img_item">
				<view class="left_title">店内照</view>
				<image src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">简洁干净的店内照可以让客户 放心点单</view>
			</view>
			<view class="uploading_img_item">
				<view class="left_title">门店logo</view>
				<image src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">上传店铺logo,提升进店概率（ 支持JPG，JPEG，PNG格式， 大小不超过500K）</view>
			</view>
		</view>
		<button type="primary" class="submit_btn">提交</button>
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
.apply_wrapper {
	width: 100%;
}
.basic_msg_text {
	width: 100%;
	height: 60upx;
	background-color: #e6f1ff;
	padding-left: 30upx;
	box-sizing: border-box;
	line-height: 60upx;
	font-size: 24upx;
	color: #74b1ff;
}
.input_cont {
	width: 100%;
	height: 95upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-top: 1upx solid #e0e0e0;
	padding: 0 10upx;
	box-sizing: border-box;
}
.left_text {
	width: 215upx;
	text-align: left;
	color: #333333;
	font-size: 28upx;
	font-weight: bold;
}
.input_cont > input {
	flex: 1;
	font-size: 26upx;
}
.center_text {
	font-size: 26upx;
	color: #888888;
	flex: 1;
}
.next_icon {
	width: 14upx;
	height: 24upx;
}
.address_icon {
	width: 32upx;
	height: 40upx;
}
.input_cont:first-child {
	border: none;
}
.store_imgs {
	width: 100%;
}
.uploading_img_item {
	width: 100%;
	padding: 30upx 33upx;
	display: flex;
	flex-direction: row;
	border-top: 1upx solid #e0e0e0;
}
.left_title {
	color: #333333;
	font-size: 24upx;
	margin-top: 20upx;
	width: 215upx;
	font-weight: bold;
}
.add_img {
	width: 110upx;
	height: 110upx;
}
.right_explain {
	width: 327upx;
	margin-left: 28upx;
	color: #888888;
	font-size: 24upx;
}
.submit_btn {
	width: 200upx;
	height: 62upx;
	background-color: #ff6b6b;
	border-radius: 30upx;
	text-align: center;
	line-height: 62upx;
	color: #fff;
	margin-top: 60upx;
}
</style>
