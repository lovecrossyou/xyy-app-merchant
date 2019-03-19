<template>
	<view class="list_wrapper">
		<text class="item_text">{{title}}</text>
		<image class="next_icon" src="http://qnimage.xiteng.com/right_icon@2x.png" mode="widthFix"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			title:String
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
	.list_wrapper{
		width: 100%;
		height: 88upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.next_icon{
		width:14upx ;
	}
	.item_text{
		flex: 1;
		color: #333333;
		font-size: 30upx;
		margin-left: 20upx;
	}
</style>
