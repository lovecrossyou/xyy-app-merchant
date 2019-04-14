<template>
	<view class="wrapper">
		<view class="header_bg"></view>
		<view class="top_operation">
			<image src="../../static/login/rigjt_icon@2x.png" mode="" class="back_icon" @click="goBack"></image>
			<view class="top_text" @click="doCreateShop">去开店</view>
		</view>
		<view class="main_text">鑫翼优商家</view>

		<!-- 登录注册切换 -->
		<view class="login_option_tab">
			<view class="top_tab">
				<view v-for="(item, index) in navContent" :key="index" :class="indexNeed==index?'pitch':'nopitch'" @click="loginFn(index)">{{ item }}</view>
			</view>

			<view class="login_tab_area" v-if="indexNeed == 0 ? true : false">
				<view class="input_area"><input type="number" v-model="formData.username" placeholder="请输入管理员手机号" /></view>
				<view class="input_area">
					<input type="number" v-model="formData.password" placeholder="请输入密码" />
					<view class="forget_password_text">忘记密码</view>
				</view>
			</view>

			<view class="login_tab_area" v-if="indexNeed == 1 ? true : false">
				<view class="input_area"><input type="number" value="" placeholder="请输入管理员手机号" /></view>
				<view class="input_area">
					<input type="number" value="" placeholder="请输入验证码" />
					<button class="get_code">获取验证码</button>
				</view>
			</view>
		</view>
		<button class="login_btn" @click="doLogin">登录</button>
		<view class="footer_text" @click="doCreateShop">注册或创建账户即同意《鑫翼优用户注册协议书》</view>
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
				navContent: ['账号登录', '短信登录'],
				indexNeed: 0,
				formData: {
					username: '',
					password: ''
				}
			};
		},
		components: {},
		computed: {},
		methods: {
			...mapActions(['login', 'appLogin']),
			loginFn(index) {
				this.indexNeed = index;
				console.log(index);
			},
			// 登陆
			doLogin() {
				this.appLogin(this.formData);
			},
			// 开店
			doCreateShop(){
				uni.navigateTo({
					url:"/pages/shop/storeApply"
				})
			},
			goBack() {
				uni.navigateBack()
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		width: 100%;
		position: relative;
	}

	.header_bg {
		width: 100%;
		height: 400upx;
		background: url(http://qnimage.xiteng.com/banner@2x.png) no-repeat center center;
		background-size: 100% 100%;
	}

	.top_operation {
		width: 100%;
		padding: 50upx 30upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		top: 0;
		left: 0;
	}

	.back_icon {
		width: 22upx;
		height: 38upx;
	}

	.top_text {
		color: #ffffff;
		font-size: 30upx;
	}

	.main_text {
		width: 100%;
		color: #ffffff;
		font-size: 42upx;
		text-align: center;
		position: absolute;
		top: 180upx;
		left: 0;
	}

	.login_tab_area {
		margin-top: 50upx;
	}

	.input_area {
		width: 520upx;
		height: 92upx;
		padding: 0 10upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #e0e0e0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.input_area>input {
		font-size: 24upx;
	}

	.forget_password_text {
		color: #333333;
		font-size: 24upx;
	}

	.login_btn {
		width: 500upx;
		height: 80upx;
		background-color: #3e87eb;
		font-size: 32upx;
		color: #fff;
		border-radius: 50upx;
		margin-top: 115upx;
	}

	.footer_text {
		width: 100%;
		color: #3e87eb;
		font-size: 24upx;
		text-align: center;
		position: absolute;
		bottom: 50upx;
		left: 0;
	}

	.get_code {
		width: 160upx;
		height: 50upx;
		border-radius: 30upx;
		font-size: 24upx;
		text-align: center;
		line-height: 50upx;
		color: #fff;
		background-color: #3e87eb;
	}

	.top_tab {
		width: 365upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.login_option_tab {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 68upx;
	}

	.pitch {
		color: #222222;
		font-size: 32upx;
	}

	.nopitch {
		color: #999;
		font-size: 30upx;
	}
</style>
