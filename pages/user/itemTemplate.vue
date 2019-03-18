<template>
	<view class="list_wrapper">
		<image class="item-icon" :src="imgSrc" mode="widthFix"/>
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
			imgWidth:String,
			imgHeight:String,
			title:String,
			imgSrc:String
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
		align-items: center;
	}
	
	.item-icon{
		width: 45upx;
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
