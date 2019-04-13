<template>
	<view class="flow_path_wrapper">
		<img src="../../static/shop/wancheng@2x.png" alt="" class="succes_icon">
		<view class="title_text">提交完成，请等待审核结果</view>
		<view class="message_text_l">工作人员会在1-3个工作日内进行审核，审核结果会短信通知</view>
		<view class="message_text">初始 账户： {{phone}}</view>
		<view class="message_text">初始 密码： {{pwd}}</view>

		<button type="primary" class="submit_btn" @click="goLogin">去登录</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				pwd: '123456'
			}
		},
		onLoad(opt) {
			this.phone = opt.phone;
		},
		methods:{
			goLogin(){
				uni.redirectTo({
					url:'/pages/login/register'
				})
			}
		}
	}
</script>

<style scoped>
	.flow_path_wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.succes_icon {
		width: 126upx;
		height: 126upx;
		margin-top: 370upx;
	}

	.title_text {
		color: #FF8638;
		font-size: 34upx;
		margin-top: 66upx;
		font-weight: bold;
	}

	.message_text_l {
		width: 100%;
		text-align: center;
		color: #FF8638;
		font-size: 26upx;
		margin-top: 25upx;
		line-height: 40upx;
	}

	.message_text {
		width: 60%;
		padding: 0 20upx;
		/* text-align: center; */
		color: #FF8638;
		font-size: 26upx;
		margin-top: 25upx;
		line-height: 40upx;
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
