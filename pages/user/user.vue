<template>
	<view class="user_wrapper">
		<!-- 头部 -->
		<view class="header_wrapper">
			<img :src="userInfo.icon" alt="" class="tea_img" />
			<view class="user_name">{{userInfo.cnName}}</view>
			<image src="http://qnimage.xiteng.com/right_icon@2x.png" mode="" class="next_icon"></image>
		</view>
		<view class="item_list">
			<itemTemplate imgSrc="../../static/user/jiaoyijilu@2x.png" title="交易记录"></itemTemplate>
			<view @click="goSetting">
				<itemTemplate imgSrc="../../static/user/settings@2x.png" title="设置"></itemTemplate>
			</view>
		</view>
	</view>
</template>

<script>
	import itemTemplate from "./itemTemplate.vue"
	import {
		mapState
	} from 'vuex'

	export default {
		// computed:mapState(['forcedLogin', 'hasLogin', 'userName','userInfo']),
		computed: mapState({
			forcedLogin: state => state.forcedLogin,
			hasLogin: state => state.hasLogin,
			userInfo: state => state.userInfo,
			orderList: state => state.shop.orderList
		}),
		components: {
			itemTemplate
		},
		methods: {
			goSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			}
		}
	};
</script>

<style>
	.user_wrapper {
		width: 100%;
	}

	.header_wrapper {
		width: 100%;
		height: 200upx;
		display: flex;
		flex-direction: row;
		padding: 20upx 28upx 20upx 24upx;
		box-sizing: border-box;
		align-items: center;
		border-bottom: 1upx solid #f3e1d5;
	}

	.tea_img {
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		border: 1upx solid rgba(210, 210, 210, 1);
		background-color: #E1E1E1;
	}

	.user_name {
		flex: 1;
		font-size: 32upx;
		color: #ff8638;
		line-height: 200upx;
		margin-left: 40upx;
	}

	.next_icon {
		width: 14upx;
		height: 24upx;
	}

	.item_list {
		padding: 10upx 25upx;
		box-sizing: border-box;
	}
</style>
