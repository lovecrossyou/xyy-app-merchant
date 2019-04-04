<template>
	<view class="setting_wrapper">
		<view @click="goFeedBack">
			<chooseItem title="意见反馈"></chooseItem>
		</view>
		<view>
			<chooseItem title="修改密码"></chooseItem>
		</view>
		<view @click="loginOut">
			<chooseItem title="退出登录"></chooseItem>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
	} from 'vuex'
	import chooseItem from "@/pages/setting/components/chooseItem.vue"
	export default {
		components: {
			chooseItem
		},
		computed: {

		},
		methods: {
			...mapMutations(['logout']),
			loginOut() {
				this.logout();
				uni.reLaunch({
					url:"/pages/home/home"
				})
			},
			goFeedBack() {
				uni.navigateTo({
					url: "feedBack"
				})
			}
		}
	}
</script>

<style scoped>
	.setting_wrapper {
		width: 100%;
		padding: 25upx;
		box-sizing: border-box;
	}
</style>
