<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">
			<view class="basic_msg_text">基本信息</view>
			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">店铺名称</view>
					<input type="text" v-model="shopInfo.name" :value="shopInfo.name" placeholder="请输入店铺名称" />
				</view>
				<!-- 店铺简介 -->
				<view class="input_cont">
					<view class="left_text">店铺简介</view>
					<input type="text" v-model="shopInfo.promotion_info" :value="shopInfo.promotion_info" placeholder="请输入店铺简介" />
				</view>
				<!-- 配送费 -->
				<view class="input_cont">
					<view class="left_text">配送费（¥）</view>
					<input type="number" v-model="shopInfo.float_delivery_fee" :value="shopInfo.float_delivery_fee" placeholder="配送费" />
				</view>
				<!-- 起送价 -->
				<view class="input_cont">
					<view class="left_text">起送价（¥）</view>
					<input type="number" v-model="shopInfo.float_minimum_order_amount" :value="shopInfo.float_minimum_order_amount"
					 placeholder="请输入起送价" />
				</view>

				<!-- 营业时间 -->
				<div class="input_cont">
					<div class="left_text">开始营业时间</div>
					<picker class="picker" mode="time" :value="startTime" start="00:00" end="24:00" @change="startOpenTimeChange">
						<view class="center_text">{{startTime}}</view>
					</picker>
				</div>
				<div class="input_cont">
					<div class="left_text">结束营业时间</div>
					<picker class="picker" mode="time" :value="endTime" start="00:00" end="24:00" @change="endOpenTimeChange">
						<view class="center_text">{{endTime}}</view>
					</picker>
				</div>

				<view class="input_cont">
					<view class="left_text">联系电话</view>
					<input type="number" v-model="shopInfo.phone" :value="shopInfo.phone" placeholder="请填写手机号" />
				</view>
				<view class="input_cont">
					<view class="left_text">门店分类</view>
					<view class="center_text" @click="showCategoryPicker">{{shopInfo.category}}</view>
					<image src="../../static/shop/xiala@2x.png" mode="" class="next_icon"></image>
				</view>

				<view class="input_cont" @click="searchAddress">
					<view class="left_text">门店地址</view>
					<view class="center_text">{{shopInfo.address}}</view>
					<image src="../../static/shop/shouhuodizhi@2x.png" mode="" class="address_icon"></image>
				</view>

			</view>
		</view>
		<!-- 门店照片 -->
		<view class="basic_msg_text" style="margin-top: 20upx;">店铺信息</view>
		<view class="store_imgs">
			<view class="uploading_img_item" @click="upLoadImagePath" style="border: none;">
				<view class="left_title">店铺头像</view>
				<image v-if="shopInfo.image_path.length!=0" :src="shopInfo.image_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>

				<view class="right_explain">一张真实的门店照可提升店铺 形象</view>
			</view>
			<view class="uploading_img_item" @click="upLoadBusinessLicence" style="border: none;">
				<view class="left_title">营业执照</view>
				<image v-if="shopInfo.license" :src="shopInfo.license.business_license_image" mode="" class="add_img"></image>
				<image v-else-if="shopInfo.business_license_image" :src="shopInfo.business_license_image" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>

				<view class="right_explain">简洁干净的店内照可以让客户 放心点单</view>
			</view>
			<view class="uploading_img_item" @click="upLoadServiceLicence" style="border: none;">
				<view class="left_title">餐饮服务许可证</view>
				<image v-if="shopInfo.license" :src="shopInfo.license.catering_service_license_image" mode="" class="add_img"></image>
				<image v-else-if="shopInfo.catering_service_license_image" :src="shopInfo.catering_service_license_image" mode=""
				 class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>

				<view class="right_explain">上传店铺logo,提升进店概率（ 支持JPG，JPEG，PNG格式， 大小不超过500K）</view>
			</view>
		</view>
		<wzp-picker ref="wzpPicker" :mode="mode" :pickerList="pickerList" :defaultIndex="defaultIndex" :equalModeId="equalModeId"
		 @onConfirm="onConfirm"></wzp-picker>
		<button type="primary" class="submit_btn" @click="shopUpdate">提交</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import wzpPicker from "../../components/wzp-picker/wzpPicker.vue";
	import cityData from "../../common/city.data.js";
	import province from '../../common/province.js';
	import api from '@/util/api.js'
	export default {
		computed: mapState(['shopInfo']),
		data() {
			return {
				startTime: '09:00',
				endTime: '21:00',
				pickerValue: "",
				mode: "",
				pickerList: [],
				defaultIndex: [],
				addressDetail: '',
			};
		},
		onLoad(opt) {
			this.categoryList();
		},
		methods: {
			upLoadBusinessLicence() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.business_license_image = res.image_path;
							if (that.shopInfo.license) {
								that.shopInfo.license.business_license_image = res.image_path;

							}

						})
					}
				});
			},
			upLoadServiceLicence() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.catering_service_license_image = res.image_path;
							if (that.shopInfo.license) {
								that.shopInfo.license.catering_service_license_image = res.image_path;
							}
						})
					}
				});
			},
			upLoadImagePath() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_path = res.image_path;
						})
					}
				});
			},
			
			// 更新店铺 
			async shopUpdate() {
				const params = this.shopInfo;
				let res;
				if(params.id){
					res = await api.shopUpdate(params);
				}
				else{
					if(this.shopInfo.phone.length!=11){
						uni.showToast({
							title: '请输入合法的手机号码',
							mask: false,
							duration: 1500
						});
						return;
					}
					if(this.shopInfo.category === '请选择'){
						uni.showToast({
							title: '请选择店铺分类',
							mask: false,
							duration: 1500
						});
						return;
					}
					res = await api.createShop(params);
					if(res.status === 0){
						uni.showToast({
							title: res.message,
							mask: false,
							duration: 1500
						});
						return;
					}
					uni.redirectTo({
						url:"/pages/shop/enterFlowPath?phone="+params.phone
					})
				}
				if (res.status === 1) {
					uni.showToast({
						title: res.success,
						mask: false,
						duration: 1500
					});
				}
			},
			startOpenTimeChange: function(e) {
				this.startTime = e.target.value;
				this.shopInfo.startTime = e.target.value;
			},
			endOpenTimeChange: function(e) {
				this.endTime = e.target.value;
				this.shopInfo.endTime = e.target.value;
			},
			searchAddress() {
				uni.navigateTo({
					url: '/pages/address/searchAddress'
				})
			},
			// 双列联动初始化
			showCategoryPicker() {
				this.mode = 'two_linkage';
				this.defaultIndex = [0, 0];
				this.$refs.wzpPicker.showPicker();
			},

			onConfirm(e) {
				const pickerValue = this.pickerList[e[0]].label + "/" + this.pickerList[e[0]].children[e[1]].label;
				this.shopInfo.category = pickerValue;
			},
			async categoryList() {
				const res = await api.getCategory();
				let list = [];
				res.forEach(c => {
					let node = {};
					node.label = c.name;
					node.children = c.sub_categories.map(sub => {
						return {
							label: sub.name,
							value: sub.id
						}
					});
					list.push(node);
				});
				this.pickerList = list;
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
		padding-bottom: 40upx;
		box-sizing: border-box;
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

	.picker {
		width: 40%;
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
