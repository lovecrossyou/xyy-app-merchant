<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">
			<view class="basic_msg_text">基本信息（必填）</view>
			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">门店信息</view>
					<input type="text" v-model="formData.name" :value="formData.name" placeholder="请与门脸照上名称一致" />
				</view>
				<view class="input_cont">
					<view class="left_text">联系人电话</view>
					<input type="text" v-model="formData.phone" :value="formData.phone" placeholder="请填写手机号" />
				</view>
				<view class="input_cont">
					<view class="left_text">门店分类</view>
					<view class="center_text" @click="showCategoryPicker">{{formData.category}}</view>
					<image src="../../static/shop/xiala@2x.png" mode="" class="next_icon"></image>
				</view>
				
				<view class="input_cont" @click="searchAddress">
					<view class="left_text">门店地址</view>
					<view class="center_text">请选择地址</view>
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
		<wzp-picker ref="wzpPicker" :mode="mode" :pickerList="pickerList" :defaultIndex="defaultIndex" :equalModeId="equalModeId"
		 @onConfirm="onConfirm"></wzp-picker>
		<button type="primary" class="submit_btn">提交</button>
	</view>
</template>

<script>
	import wzpPicker from "../../components/wzp-picker/wzpPicker.vue";
	import cityData from "../../common/city.data.js";
	import province from '../../common/province.js';
	export default {
		data() {
			return {
				pickerValue: "",
				mode: "",
				pickerList: [],
				defaultIndex: [],
				addressDetail:'',
				formData: {
					"name": "邻家便利店",
					"address": "北京市西城区百万庄大街11号",
					"latitude": 39.92843,
					"longitude": 116.35073,
					"description": "快倒闭了",
					"phone": 13220168837,
					"promotion_info": "哈哈,就是便宜!",
					"float_delivery_fee": 5,
					"float_minimum_order_amount": 20,
					"is_premium": true,
					"delivery_mode": true,
					"new": true,
					"bao": true,
					"zhun": true,
					"piao": true,
					"startTime": "05:30",
					"endTime": "18:30",
					"image_path": "http://static.kuaimayoupin.com/16a1076af23.jpg",
					"business_license_image": "http://static.kuaimayoupin.com/16a1076b844.jpg",
					"catering_service_license_image": "http://static.kuaimayoupin.com/16a1076cdd6.jpg",
					"activities": [{
						"icon_name": "减",
						"name": "满减优惠",
						"description": "满30减5，满60减8"
					}],
					"category": "请选择"
				}
			};
		},
		methods: {
			searchAddress(){
				uni.navigateTo({
					url: '/pages/address/searchAddress'
				})
			},
			// 双列联动初始化
			showCategoryPicker() {
				this.mode = 'two_linkage';
				this.pickerList = cityData;
				this.defaultIndex = [0, 0];
				this.$refs.wzpPicker.showPicker();
			},

			onConfirm(e) {
				const pickerValue = cityData[e[0]].label + "/" + cityData[e[0]].children[e[1]].label;
				this.formData.category = pickerValue;
			}
		},
		onBackPress() {
			if (this.$refs.wzpPicker.pickerShow) {
				this.$refs.wzpPicker.closePicker();
				return true;
			}
		},
		components: {
			wzpPicker
		}
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

	.input_cont>input {
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
		padding: 0 33upx;
		box-sizing: border-box;
	}

	.uploading_img_item {
		width: 100%;
		padding: 30upx 0;
		display: flex;
		flex-direction: row;
		border-top: 1upx solid #e0e0e0;
	}

	.left_title {
		color: #333333;
		font-size: 28upx;
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