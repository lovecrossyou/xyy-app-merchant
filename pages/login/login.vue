<template>
	<view class="enter_wrapper">
		<img src="http://qnimage.xiteng.com/WechatIMG2083.jpeg" alt="" class="bg_img">
		<view class="enter_box_area">
			<view class="tel_area_wrapper">
				<input type="number" v-model="username" placeholder="请输入您的手机号码" placeholder-style="color:#7CA7D2;" />
			</view>
			<view class="tel_area_wrapper">
				<input type="number" v-model="password" placeholder="请输入密码" placeholder-style="color:#7CA7D2;" />
				<!-- <button type="primary" class="get_code_btn">获取验证码</button> -->
			</view>
		</view>
		<!-- <button class="login_btn" open-type="getUserInfo" @getuserinfo="oauth('weixin')">登录</button> -->
		<button class="login_btn" @click="doLogin">登录</button>


		<button class="login_btn_shop" @click="doCreateShop">我要开店</button>
		<view class="footer_text">注册或创建账户即同意《鑫翼优商家注册协议书》 </view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				providerList: [],
				username: '13220168837',
				password: '123456'
			}
		},
		methods: {
			...mapActions(['login', 'appLogin', 'registeToUNPush']),

			doCreateShop() {
				uni.navigateTo({
					url: "/pages/shop/shopcreate"
				})
			},
			doLogin() {
				let that = this;
				this.appLogin({
					data: {
						username: this.username,
						password: this.password
					},
					cb: () => {
						// 注册推送服务
						console.log('注册推送服务')						
						that.pushRegiste();
					}
				})
			},
			pushRegiste(){
				this.registeToUNPush();
			},
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						// console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								const {
									encryptedData,
									iv
								} = infoRes;
								console.log("infoRes ", JSON.stringify(infoRes));
								console.log("res ", JSON.stringify(res));

								console.log("encryptedData ", JSON.stringify(encryptedData));
								var params = {
									userPhone: this.userPhone,
									userCode: this.userCode,
									code: res.code,
									userLng: '',
									userLat: '',
									encode: {
										encryptedData,
										iv
									}
								}
								// #ifdef APP-PLUS
								params.weiXinUserInfo = {
									openid: res.authResult.openid
								}
								// #endif

								console.log('params###', JSON.stringify(params));
								this.toMain(params);
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			toMain(params) {
				uni.reLaunch({
					url: '/pages/home/home'
				});
			}
		},
		onLoad() {
			this.initProvider();
		}
	}
</script>

<style lang="less" scoped>
	.enter_wrapper {
		width: 100%;

		.bg_img {
			width: 100%;
			height: 396upx;
		}

		.enter_box_area {
			width: 100%;
			padding: 0 47upx;
			box-sizing: border-box;

			.tel_area_wrapper {
				width: 100%;
				height: 95upx;
				border-bottom: 1upx solid #7CA7D2;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.get_code_btn {
					// width: 165upx;
					height: 60upx;
					background-color: #7CA7D2;
					color: #fff;
					font-size: 28upx;
					border-radius: 10upx;
					border: none;
					text-align: center;
					line-height: 60upx;
				}
			}

			.tel_area_wrapper>input {
				font-size: 28upx;
				color: #7CA7D2;
				flex: 1;
			}
		}

		.login_btn {
			width: 655upx;
			height: 90upx;
			border: none;
			background-color: #7CA7D2;
			color: #fff;
			text-align: center;
			line-height: 90upx;
			font-size: 28upx;
			border-radius: 40upx;
			margin-top: 100upx;
		}

		.login_btn_shop {
			width: 655upx;
			height: 90upx;
			border: none;
			// background-color: #e1e1e1;
			color: #7CA7D2;
			text-align: center;
			line-height: 90upx;
			font-size: 28upx;
			border-radius: 40upx;
			margin-top: 100upx;
		}

		.third_party_area {
			width: 100%;
			border-top: 1upx dashed #F1F1F1;
			margin-top: 100upx;
			position: relative;

			.third_party_text {
				color: #A3A3A3;
				font-size: 24upx;
				position: absolute;
				left: 43%;
				top: -15upx;
			}
		}

		.login_way {
			width: 70%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 65upx auto 0 auto;

			image {
				width: 110upx;
				height: 110upx;
			}

			.share {
				width: 110upx;
				height: 110upx;
				// padding: 0 20rpx;
				// position: absolute;
				// right: 32rpx;
				// 				top: 0;
				// 				bottom: 0;
				margin: auto;
				background-size: 110upx 110upx;
				background-repeat: no-repeat;
				border: none;
				background-image: url('http://qnimage.xiteng.com/weixin@2x.png');
				border-radius: 50%;
				background-color: #fff;
			}
		}

		.footer_text {
			width: 100%;
			height: 25upx;
			color: #7CA7D2;
			font-size: 22upx;
			margin-top: 93upx;
			text-align: center;
		}
	}
</style>
