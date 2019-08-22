<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">
			<view class="basic_msg_text">基本信息</view>
			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">水厂名称</view>
					<input type="text" v-model="shopInfo.name" :value="shopInfo.name" placeholder="请输入水厂名称" />
				</view>

				<view class="input_cont" @click="searchAddress">
					<view class="left_text">水厂地址</view>
					<view class="center_text">{{shopInfo.address}}</view>
					<image src="../../static/shop/shouhuodizhi@2x.png" mode="" class="address_icon"></image>
				</view>
				
				<view class="input_cont">
					<view class="left_text">品牌(代加工/自主)</view>
					<input type="text" v-model="shopInfo.brand" :value="shopInfo.brand" placeholder="请输入品牌名称" />
				</view>
				
				<view class="input_cont">
					<view class="left_text">负责人</view>
					<input type="text" v-model="shopInfo.leader" :value="shopInfo.leader" placeholder="请输入负责人" />
				</view>
				
				<view class="input_cont">
					<view class="left_text">联系电话</view>
					<input type="number" v-model="shopInfo.phone" :value="shopInfo.phone" placeholder="请输入联系电话" />
				</view>

				<!-- 水厂简介 -->
				<view class="input_cont">
					<view class="left_text">水厂简介</view>
					<input type="text" v-model="shopInfo.promotion_info" :value="shopInfo.promotion_info" placeholder="请输入店铺简介" />
				</view>
				
				<!-- <view class="input_cont">
					<view class="left_text">门店分类</view>
					<view class="center_text" @click="showCategoryPicker">{{shopInfo.category}}</view>
					<image src="../../static/shop/xiala@2x.png" mode="" class="next_icon"></image>
				</view> -->

			</view>
		</view>
		<view class="basic_msg_text" style="margin-top: 20upx;">上游供货商信息</view>
		<!-- 桶 标签 桶盖 包装袋 -->
		<!-- Bucket Label  Bung Package-->

		<view class="store_imgs">
			<view class="uploading_img_item" @click="upLoadBucketImagePath" style="border: none;">
				<view class="left_title">桶</view>
				<image v-if="shopInfo.image_bucket_path.length!=0" :src="shopInfo.image_bucket_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">供货商信息 ＋ 资质</view>
			</view>
			
			<view class="uploading_img_item" @click="upLoadLabelImagePath" style="border: none;">
				<view class="left_title">标签</view>
				<image v-if="shopInfo.image_label_path.length!=0" :src="shopInfo.image_label_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">供货商信息 ＋ 资质</view>
			</view>
			
			<view class="uploading_img_item" @click="upLoadBungImagePath" style="border: none;">
				<view class="left_title">桶盖</view>
				<image v-if="shopInfo.image_bung_path.length!=0" :src="shopInfo.image_bung_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">供货商信息 ＋ 资质</view>
			</view>
			
			<view class="uploading_img_item" @click="upLoadPackageImagePath" style="border: none;">
				<view class="left_title">包装袋</view>
				<image v-if="shopInfo.image_package_path.length!=0" :src="shopInfo.image_package_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				<view class="right_explain">供货商信息 ＋ 资质</view>
			</view>
		</view>

		<!-- 门店照片 -->
		<view class="basic_msg_text" style="margin-top: 20upx;">资质信息</view>
		<view class="store_imgs">
			<view class="uploading_img_item" @click="upLoadImagePath" style="border: none;">
				<view class="left_title">品牌头像</view>
				<image v-if="shopInfo.image_path.length!=0" :src="shopInfo.image_path" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
			</view>
			<view class="uploading_img_item" @click="upLoadBusinessLicence" style="border: none;">
				<view class="left_title">营业执照</view>
				<image v-if="shopInfo.license" :src="shopInfo.license.business_license_image" mode="" class="add_img"></image>
				<image v-else-if="shopInfo.business_license_image" :src="shopInfo.business_license_image" mode="" class="add_img"></image>
				<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
			</view>
		</view>
		<button type="primary" class="submit_btn" @click="factoryUpdate">提交</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import wzpPicker from "../../components/wzp-picker/wzpPicker.vue";
	import cityData from "../../common/city.data.js";
	import province from '../../common/province.js';
	import api from '@/util/api.js'
	export default {
		computed: mapState(['shopInfo','resetShopInfo']),
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
		methods: {
			upLoadPackageImagePath(){
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_package_path = res.image_path;
						})
					}
				});
			},
			upLoadLabelImagePath(){
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_label_path = res.image_path;
						})
					}
				});
			},
			upLoadBungImagePath(){
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_bung_path = res.image_path;
						})
					}
				});
			},
			upLoadBucketImagePath(){
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_bucket_path = res.image_path;
						})
					}
				});
			},
			// 营业执照
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
			async factoryUpdate() {
				const params = this.shopInfo;
				let res;
				if (params.id) {
					res = await api.factoryUpdate(params);
				} else {
					if (this.shopInfo.phone.length != 11) {
						uni.showToast({
							title: '请输入合法的手机号码',
							mask: false,
							duration: 1500
						});
						return;
					}
					res = await api.createFactory(params);
				}
				if (res.status === 1) {
					uni.showToast({
						title: res.success,
						mask: false,
						duration: 1500
					});
					uni.redirectTo({
						url: "/pages/shop/enterFlowPath?phone=" + params.phone
					})
					this.resetShopInfo();
				}
				else{
					uni.showToast({
						title: res.message,
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
				// uni.navigateTo({
				// 	url:"/pages/searchMap/searchMap"
				// })
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
		width: 240upx;
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
