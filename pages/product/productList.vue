<template>
	<view class="categoryMain">
		<view class="categoryView">
			<scroll-view scroll-y="true" class="categoryList" v-bind:style="{height: mainHeight+'px'}">
				<block v-for="(item,index) in categorylist" :key="index">
					<view class="categoryItem" :class="{'categoryclickItem':isclick===index}" @click="changeStyle(index)">
						<view class="categoryTxt">
							{{item.name}}
						</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view scroll-y="true" class="tealistView" v-bind:style="{height: mainHeight+'px'}">
				<block v-for="(item,index) in tealist" :key="index">
					<view class="header_wrapper" @click="goShopInfo">
						<img :src="item.headImage" alt="" class="tea_img" />
						<view class="water_station_info">
							<view class="water_station_name">{{item.headName}}</view>
							<view class="info">
								<view class="price">¥{{item.price/100}}</view>
								<view class="stock">库存{{item.stock}}</view>
							</view>
						</view>
						<image @click="chooseProduct(item)" src="../../static/product/edit.png" class="next_icon"></image>
					</view>
				</block>
			</scroll-view>
		</view>


		<!-- 底部footer -->
		<view class="footer" @click="addProduct">
			<view class="button">添加商品</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		onShow() {
			try {
				const res = uni.getSystemInfoSync();
				this.mainHeight = res.windowHeight;
			} catch (e) {
				// error
			}
			this.fetchList();
		},
		data() {
			return {
				mainHeight: 0,
				isclick: 0,
				tealist: [],
			}
		},
		computed: {
			categorylist() {
				return this.$store.state.product.productList;
			}
			
		},
		methods: {
			chooseProduct(product) {
				this.$store.commit('product/setProduct', product);
				uni.navigateTo({
					url: "/pages/product/product"
				})
			},
			fetchList() {
				this.$store.dispatch("product/fetchProductList", {
					id: this.$store.state.shopId
				});
			},
			addProduct() {
				uni.navigateTo({
					url: "/pages/product/product"
				})
			},
			changeStyle(index) {
				this.isclick = index;
				this.tealist = this.categorylist[index].products;
			},
			getteaList() {
				// this.tealist = this.categorylist[0].products
			}
		},
		created() {
			this.getteaList()
		}
	}
</script>

<style lang="scss">
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

	.categoryMain {
		width: 100%;


		.searchbox {
			width: 100%;
			height: 90upx;
		}

		.categoryView {
			width: 100%;
			display: flex;
			flex-direction: row;

			.categoryList {
				width: 140upx;

				.categoryItem {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 120upx;
					background-color: rgba(247, 247, 247, 1);
					border-bottom: solid 1upx rgba(255, 255, 255, 1);

					.categoryTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(42, 42, 43, 1);
						overflow: hidden;
						height: 120upx;
						line-height: 120upx;
						text-align: center;
					}
				}

				.categoryclickItem {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 120upx;
					background-color: rgba(255, 255, 255, 1);
					border-left: solid 4upx rgba(255, 89, 75, 1);

					.categoryTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(42, 42, 43, 1);
					}
				}
			}

			.tealistView {
				width: 100%;
				box-sizing: border-box;
				padding-bottom: 108upx;

				.header_wrapper {
					width: 100%;
					height: 140upx;
					display: flex;
					flex-direction: row;
					padding: 20upx 28upx 20upx 24upx;
					box-sizing: border-box;
					align-items: center;
					border-bottom: 1upx solid #f3e1d5;
				}

				.tea_img {
					width: 100upx;
					height: 100upx;
					border: 1px solid rgba(210, 210, 210, 1);

				}

				.water_station_info {
					flex: 1;
					margin-left: 35upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 100upx;
				}

				.water_station_name {
					font-size: 28upx;
					color: #555555;
				}

				.info {
					display: flex;
					flex-direction: row;


					align-items: center;

					.price {
						padding-right: 6upx;
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(248, 72, 72, 1);
					}


					.stock {

						font-size: 20upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						line-height: 28upx;
					}
				}

				.water_station_sales_num {
					font-size: 24upx;
					color: #F84848;
					margin-top: 40upx;
				}

				.next_icon {
					width: 34upx;
					height: 34upx;
				}

				.teaItem {
					display: inline-block;
					box-sizing: border-box;
					margin: 32upx 14upx 29upx 52upx;

					.teaIcon {
						width: 120upx;
						height: 120upx;
					}

					.teaTxt {
						display: flex;
						justify-content: center;
						font-size: 28upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-top: 26upx;
					}
				}
			}
		}
	}
</style>
