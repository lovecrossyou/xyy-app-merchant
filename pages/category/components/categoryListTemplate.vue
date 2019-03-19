<template>
	<view class="wrapper" @click="onClick(item)">
		<view class="title_text">{{ item.name }}</view>
		<image src="../../static/category/bianji@2x.png" mode="" class="change_img_icon" @click="addCategory"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			item: Object,
			itemClick:Function
		},
		components: {},
		computed: {},
		methods: {
			onClick(data){
				this.itemClick(data)
			},
			addCategory() {
				uni.navigateTo({
					url: '/pages/category/addCategory'
				});
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		width: 100%;
		height: 90upx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid #ebebeb;
	}

	.change_img_icon {
		width: 24upx;
		height: 28upx;
	}

	.title_text {
		color: #ff8638;
		font-size: 28upx;
	}
</style>
