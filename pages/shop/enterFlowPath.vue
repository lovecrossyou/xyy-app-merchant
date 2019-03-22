<template>
	<view class="flow_path_wrapper">
		<img src="../../static/shop/wancheng@2x.png" alt="" class="succes_icon">
		<view class="title_text">提交完成，请等待审核结果</view>
		<view class="message_text">工作人员会在1-3个工作日内进行审核，审核结果会短信通知（183****0183）手机号码</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		components: {
			
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.flow_path_wrapper{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.succes_icon{
		width: 126upx;
		height: 126upx;
		margin-top: 370upx;
	}
	.title_text{
		color: #FF8638;
		font-size: 34upx;
		margin-top: 66upx;
		font-weight: bold;
	}
	.message_text{
		width: 100%;
		text-align: center;
		color: #FF8638;
		font-size: 26upx;
		margin-top: 25upx;
		line-height: 40upx;
	}
</style>
