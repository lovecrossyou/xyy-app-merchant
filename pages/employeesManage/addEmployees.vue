<template>
	<view class="add_employees">
		<view class="head_img_wrapper">
			<view class="up_img_text">头像</view>
			<view>
				<sunsin-upimg url="https://ww...." :count="1" :autoplay="true" @onUpImg="upImgData" />
			</view>
		</view>
		<view class="up_name_wrapper">
			<view class="up_img_text">名字</view>
			<input type="text" v-model="employee.name" placeholder="未填写" />
		</view>
		<view class="up_name_wrapper">
			<view class="up_img_text">账号</view>
			<input type="number" value="" placeholder="未填写" />
		</view>
		<view>
			<chooseItem title="修改密码"></chooseItem>
		</view>
		<view class="list_wrapper">
			<text class="up_img_text">职责</text>
			<image class="next_icon" src="http://qnimage.xiteng.com/right_icon@2x.png" mode="widthFix" />
		</view>
	</view>
</template>

<script>
	import sunsinUpimg from '@/components/sunsin-upimg/sunsin-upimg.vue';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			employee(){
				return this.$store.state.employe.employe;
			}
		},
		components: {
			sunsinUpimg
		},
		//获取上传图片的所有信息,为数组
		upImgData(e) {}
	};
</script>

<style scoped>
	.add_employees {
		width: 100%;
		padding: 25upx;
		box-sizing: border-box;
	}

	.head_img_wrapper,
	.up_name_wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.up_name_wrapper {
		margin-bottom: 13upx;
	}

	.up_img_text {
		color: #555;
		font-size: 28upx;
	}

	.up_name_wrapper>input {
		width: 86%;
		color: #999;
		font-size: 24upx;
	}

	.list_wrapper {
		width: 100%;
		/* height: 88upx; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.next_icon {
		width: 14upx;
	}

	.item_text {
		flex: 1;
		color: #333333;
		font-size: 30upx;
	}
</style>
