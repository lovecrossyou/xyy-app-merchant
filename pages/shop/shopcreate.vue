<template>
	<div class="content">
		<!-- 店铺名称 -->
		<div class="username-wrapper">
			<div class="title88">店铺名称</div>
			<input class="shop-addr" @input="replaceInput" v-model="formData.name" placeholder="请输入店铺名称" />
		</div>
		<!-- 头像 -->
		<div class="avatar-wrapper" @click="chooseImage">
			<div class="title">店铺头像</div>
			<image :src="formData.imageUrl" class="shop-image"></image>
		</div>
		<div class="username-wrapper">
			<div class="title88">店铺类型</div>
			<picker class="picker" mode="selector" @change="bindPickerChange" :value="index" :range="array" range-key="key">
				<view class="shop-addr">{{array[index].key}}</view>
			</picker>
		</div>

		<!-- 店铺地址 -->
		<div class="addr-wrapper" @click='toAddress'>
			<div class="title88">店铺地址</div>
			<div class="shop-addr">{{selectAddress.name}}</div>
		</div>

		<!-- 营业时间 -->
		<div class="username-wrapper">
			<div class="title88">开始营业时间</div>
			<picker mode="time" :value="formData.startOpenTime" start="00:00" end="24:00" @change="startOpenTimeChange">
				<view class="shop-addr">{{formData.startOpenTime}}</view>
			</picker>
		</div>
		<div class="username-wrapper">
			<div class="title88">结束营业时间</div>
			<picker mode="time" :value="formData.endOpenTime" start="00:00" end="24:00" @change="endOpenTimeChange">
				<view class="shop-addr">{{formData.endOpenTime}}</view>
			</picker>
		</div>

		<div class="username-wrapper">
			<div class="title88">店铺介绍</div>
			<input class="shop-addr" @input="replaceInput" v-model="formData.presentation" placeholder="请输入店铺介绍" />
		</div>

		<!-- 手机号码 -->
		<div class="phone-wrapper">
			<div class="title88">手机号码</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="formData.telephone" placeholder="请输入手机号码" />
		</div>

		<!-- 底部footer -->
		<div class="footer" @click="saveShopInfo">
			<div class="button">创建店铺</div>
		</div>
	</div>
</template>

<script>
	import api from '@/util/api.js'

	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				index: 0,
				inputValue: '',
				changeValue: '',
				formData: {
					"name": "",
					"shopType": "convenience_store",
					"imageUrl": "",
					"presentation": "",
					"shopDetailImage": [],
					"locationInfo": {
						"longitude": '',
						"latitude": '',
						"addressName": "请选择地址"
					},
					"telephone": "",
					startOpenTime: '09:00',
					endOpenTime: '21:00',
				},
				array: [{
					key: '水站',
					value: 'water_store'
				}, {
					key: '便利店',
					value: 'convenience_store'
				}]
			}
		},
		computed: {
			selectAddress() {
				return this.$store.state.shop.selectAddress;
			}
		},
		methods: {
			startOpenTimeChange: function(e) {
				this.formData.startOpenTime = e.target.value
			},
			endOpenTimeChange: function(e) {
				this.formData.endOpenTime = e.target.value
			},
			async saveShopInfo() {
				if (this.selectAddress.name.length !== 0) {
					var {
						name,
						location
					} = this.selectAddress;

					var latitude = location.split(',')[0];
					var longitude = location.split(',')[1];

					var locationInfo = {
						longitude,
						latitude,
						addressName: name
					}
					this.formData.locationInfo = locationInfo;
				}
				var shopType = this.array[this.index].value;
				this.formData.shopType = shopType;

				const res = await api.createShop(this.formData);
				if (res.status === 'ok') {
					uni.navigateBack();
				}

				console.log('formdata ', this.formData);
			},
			chooseImage: function() {
				var that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						if (res.tempFilePaths.length !== 0) {
							that.uploadImage(res.tempFilePaths)
						}
					}
				});
			},
			uploadImage: function(tempFilePaths) {
				api.uploader(tempFilePaths[0], res => {
					this.formData.imageUrl = res.url;
				})
			},
			bindPickerChange: function(e) {
				this.index = e.target.value;
			},
			async fetchShopInfo() {
				const res = await api.shopInfo({
					"sn": this.$store.state.userInfo.shopSn
				});
				this.formData = res.data;
			},
			toAddress() {
				//地址列表
				uni.navigateTo({
					url: '../address/searchAddress'
				})
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			replaceInput: function(event) {
				var value = event.target.value;
				if (value === '11') {
					this.changeValue = '2';
				}
			},
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					uni.hideKeyboard();
				}
			},
			getDate: function(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="less">
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.button {
		background-color: #FF8638;
		height: 88upx;
		border-radius: 6upx;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		width: 95%;
		margin-bottom: 20upx;
	}

	.username-wrapper,
	.phone-wrapper,
	.phone-wrapper {
		// background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;
		height: 88upx;
		display: flex;
		flex-direction: row;

	}

	.content {
		position: relative;
		padding: 0 24upx;
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
	}

	.avatar-wrapper {
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;
		height: 140upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// background-color: aqua;
		align-items: center;
	}

	.title {
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
		height: 100%;
		line-height: 140upx;
		width: 140upx;
	}

	.shop-image {
		width: 120upx;
		height: 120upx;
		background-color: #e1e1e1;
		margin-right: 38upx;
	}

	.shopicon {
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;

		height: 140upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// background-color: aqua;
	}

	.addr-wrapper {
		height: 88upx;
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;

		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		// background-color: aqua;
	}

	.title88 {
		width: 180upx;
		height: 88upx;
		line-height: 88upx;
		margin-right: 24upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
	}

	.shop-addr {
		color: #999;
		font-size: 24upx;
		height: 88upx;
		line-height: 88upx;
		height: 88upx;
		margin-right: 38upx;
	}

	.picker {
		display: flex;
		flex: 1;
	}
</style>
