<template>
	<div class="content">
		<!-- 商品名称 -->
		<div class="username-wrapper">
			<div class="title88">商品名称</div>
			<input v-model="formData.headName" class="shop-addr" @input="replaceInput" placeholder="请输入商品名称" />
		</div>
		<div class="username-wrapper">
			<div class="title88">商品品牌</div>
			<input v-model="formData.brand" class="shop-addr" @input="replaceInput" placeholder="请输入商品品牌" />
		</div>
		<!-- 原价 -->
		<div class="phone-wrapper">
			<div class="title88">原价</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="formData.originalPrice" placeholder="请输入原价" />
		</div>
		<!-- 现价 -->
		<div class="phone-wrapper">
			<div class="title88">现价</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="formData.price" placeholder="请输入现价" />
		</div>
		<!-- 商品规格 -->
		<div class="username-wrapper">
			<div class="title88">商品规格</div>
			<input class="shop-addr" @input="replaceInput" v-model="formData.spec" placeholder="请输入商品规格" />
		</div>

		<!-- 库存 -->
		<div class="phone-wrapper">
			<div class="title88">库存</div>
			<input type="number" class="shop-addr" @input="replaceInput" v-model="formData.stock" placeholder="请输入库存" />
		</div>
		<div class="addr-wrapper" @click='goCategory'>
			<div class="title88">商品分类</div>
			<div class="shop-addr">{{category.name}}</div>
		</div>
		<div class="username-wrapper">
			<div class="title88">商品描述</div>
			<input class="shop-addr" @input="replaceInput" v-model="formData.productDescribe" placeholder="请输入商品描述" />
		</div>
		<!-- 头像 -->
		<div class="avatar-wrapper" @click="chooseImage">
			<div class="title">商品图片</div>
			<image v-bind:src="formData.headImage" class="shop-image"></image>
		</div>

		<!-- 底部footer -->
		<div class="footer">
			<div v-if="formData.id" class="button" @click="saveOrUpdate">更新</div>
			<div v-else class="button" @click="saveOrUpdate">保存</div>
			<button type="default" v-if="formData.id" class="button-del" @click="delProduct">删除</button>
		</div>
	</div>
</template>

<script>
	import api from '../../util/api.js'
	import {
		mapState
	} from "vuex"
	export default {
		computed: {
			...mapState('product', {
				category: state => state.category,
				formData: state => state.editProduct,
			})
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
				api.uploader(tempFilePaths[0], res => {
					this.formData.headImage = res.url;
				})
			},
			goCategory() {
				//地址列表
				uni.navigateTo({
					url: '../category/categoryList'
				})
			},
			async saveOrUpdate() {
				const formData = this.formData;
				formData.categoryId = this.category.id;
				// headName brand spec price category headImage
				const {
					headName,
					brand,
					spec,
					price,
					category,
					headImage
				} = formData;
				if (!headName) {
					uni.showToast({
						title: '请输入商品名称',
						mask: false,
						duration: 1500
					});
					return;
				}
				if (!brand) {
					uni.showToast({
						title: '请输入品牌名称',
						mask: false,
						duration: 1500
					});
					return;

				}
				if (!spec) {
					uni.showToast({
						title: '请输入规格',
						mask: false,
						duration: 1500
					});
					return;

				}
				if (!price) {
					uni.showToast({
						title: '请输入价格',
						mask: false,
						duration: 1500
					});
					return;

				}
				if (!category) {
					uni.showToast({
						title: '请选择分类',
						mask: false,
						duration: 1500
					});
					return;

				}
				if (!headImage) {
					uni.showToast({
						title: '请上传商品图片',
						mask: false,
						duration: 1500
					});
					return;

				}
				// 价格处理
				if (formData.originalPrice) {
					formData.originalPrice = Number(formData.originalPrice) * 100;
				}
				if (formData.price) {
					formData.price = Number(formData.price) * 100;
				}
				var res = null
				if (formData.id) {
					res = await api.editProduct(formData);
				} else {
					formData.shopId = this.$store.state.shopInfo.id;;
					res = await api.createProduct(formData);
				}
				if (res.status === 'ok') {
					// 					this.$store.dispatch("product/fetchProductList", {
					// 						id: this.$store.state.shopId
					// 					});
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
