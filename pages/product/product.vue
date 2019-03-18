<template>
	<div class="content">
		<!-- 商品名称 -->
		<div class="username-wrapper">
			<div class="title88">商品名称</div>
			<input class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入商品名称" />
		</div>
		<!-- 原价 -->
		<div class="phone-wrapper">
			<div class="title88">原价</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入原价" />
		</div>
		<!-- 现价 -->
		<div class="phone-wrapper">
			<div class="title88">现价</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入现价" />
		</div>
		<!-- 商品规格 -->
		<div class="username-wrapper">
			<div class="title88">商品规格</div>
			<input class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入商品规格" />
		</div>
		<!-- 商品销量 -->
		<div class="phone-wrapper">
			<div class="title88">商品销量</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入商品销量" />
		</div>
		<!-- 库存 -->
		<div class="phone-wrapper">
			<div class="title88">库存</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入库存" />
		</div>
		<div class="addr-wrapper" @click='goCategory'>
			<div class="title88">商品分类</div>
			<div class="shop-addr">请选择</div>
		</div>
		<div class="username-wrapper">
			<div class="title88">商品描述</div>
			<input class="shop-addr" @input="replaceInput" v-model="changeValue" placeholder="请输入商品描述" />
		</div>
		<!-- 头像 -->
		<div class="avatar-wrapper">
			<div class="title">店铺头像</div>
			<div class="shop-image"></div>
		</div>

		<!-- 底部footer -->
		<div class="footer">
			<div class="button">完成</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
				changeValue: ''
			}
		},
		methods: {
			goCategory() {
				//地址列表
				uni.navigateTo({
					url: '../category/categoryList'
				})
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			replaceInput: function(event) {
				var value = event.target.value;
				if (value === '11') {
					this.changeValue = '2';
				}
			},
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					uni.hideKeyboard();
				}
			}
		}
	}
</script>

<style lang="less">
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
		// height: 108upx;
		// width: 100%;
	}

	.button {
		background-color: #FF8638;
		height: 88upx;
		border-radius: 6upx;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		width: 95%;
		margin-bottom: 20upx;
	}

	.username-wrapper,
	.phone-wrapper,
	.phone-wrapper {
		// background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;
		height: 88upx;
		display: flex;
		flex-direction: row;

	}

	.content {
		position: relative;
		padding: 0 24upx;
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
	}

	.avatar-wrapper {
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;
		height: 140upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// background-color: aqua;
		align-items: center;
	}

	.title {
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
		height: 100%;
		line-height: 140upx;
		width: 140upx;
	}

	.shop-image {
		width: 120upx;
		height: 120upx;
		background-color: #e1e1e1;
		margin-right: 38upx;
	}

	.shopicon {
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;

		height: 140upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// background-color: aqua;
	}

	.addr-wrapper {
		height: 88upx;
		background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat;
		background-size: 14upx 24upx;

		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		// background-color: aqua;
	}

	.title88 {
		width: 140upx;
		height: 88upx;
		line-height: 88upx;
		margin-right: 24upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
	}

	.shop-addr {
		color: #999;
		font-size: 24upx;
		height: 88upx;
		line-height: 88upx;
		margin-right: 38upx;
	}
</style>
