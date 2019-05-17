<template>
	<div class="content">
		<div class="addr-wrapper" @click='goCategory'>
			<div class="title88">商品分类</div>
			<div class="shop-addr">{{category.name}}</div>
		</div>
		<!-- 商品名称 -->
		<div class="username-wrapper">
			<div class="title88">商品名称</div>
			<input v-model="editProduct.name" class="shop-addr" @input="replaceInput" placeholder="请输入商品名称" />
		</div>
		<!-- 商品详情 -->
		<div class="username-wrapper">
			<div class="title88">商品详情</div>
			<input v-model="editProduct.description" class="shop-addr" @input="replaceInput" placeholder="请输入商品详情" />
		</div>
		<!-- 商品图片 -->
		<div class="avatar-wrapper" @click="chooseImage">
			<div class="title">商品图片</div>

			<image v-bind:src="editProduct.image_path" class="shop-image"></image>
		</div>

		<!-- 包装费 -->
		<div class="phone-wrapper">
			<div class="title88">包装费(¥)</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="editProduct.specs[0].packing_fee" placeholder="请输入包装费" />
		</div>
		<!-- 价格 -->
		<div class="phone-wrapper">
			<div class="title88">价格(¥)</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="editProduct.specs[0].price" placeholder="请输入价格" />
		</div>

		<!-- 底部footer -->
		<div class="footer">
			<div v-if="editProduct.id" class="button" @click="saveOrUpdate">更新</div>
			<div v-else class="button" @click="saveOrUpdate">保存</div>
			<button type="default" v-if="editProduct.id" class="button-del" @click="delProduct">删除</button>
		</div>
	</div>
</template>

<script>
	import api from '../../util/api.js'
	import {
		mapState,
		setCategory
	} from "vuex"
	export default {
		computed: {
			...mapState(['shopInfo']),
			...mapState('product', ['category', 'editProduct','menus'])
		},
		data() {
			return {
				inputValue: '',
				changeValue: ''
			}
		},
		methods: {
			chooseImage: function() {
				var that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						if (res.tempFilePaths.length !== 0) {
							that.uploadImage(res.tempFilePaths)
						}
					}
				});
			},
			uploadImage: function(tempFilePaths) {
				let that = this;
				api.uploader(tempFilePaths[0], res => {
					that.editProduct.image_path = res.image_path;
				})
			},
			goCategory() {
				//地址列表
				uni.navigateTo({
					url: '../category/categoryList'
				})
			},
			async saveOrUpdate() {
				const formData = this.editProduct;
				if (this.category.name.length === 0) {
					uni.showToast({
						title: '请选择分类',
						mask: false,
						duration: 1500
					});
					return;
				}
				formData.restaurant_id = this.shopInfo.id;
				let res;
				if (formData.item_id) {
					//更新商品
					formData.new_category_id = this.category.id;
					formData.category_name = this.category.name;
					res = await api.editProduct(formData);
				} else {
					formData.category_id = this.category.id;
					// 添加商品
					res = await api.createProduct(formData);
				}

				this.$store.dispatch("product/fetchProductList", {
					restaurant_id: this.shopInfo.id,
					offset: 0,
					limit: 20
				});
				if(res){
					if(res.success){
						uni.showToast({
							title: res.success,
							mask: false,
							duration: 1500
						});
					}
					uni.navigateBack();
				}
			},

			delProduct() {
				this.$store.dispatch("shop/productRemove", {
					id: this.formData.id
				});
				uni.navigateBack();
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

	.button-del {
		background-color: #999999;
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
