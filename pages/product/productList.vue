<template>
	<view class="categoryMain">
		<view class="categoryView">
			<scroll-view scroll-y="true" class="categoryList" v-bind:style="{height: mainHeight+'px'}">
				<block v-for="(item,index) in categorylist" :key="index">
					<view class="categoryItem" :class="{'categoryclickItem':isclick===index}" @click="changeStyle(index)">
						<view class="categoryTxt">
							{{item.categoryitem}}
						</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view scroll-y="true" class="tealistView" v-bind:style="{height: mainHeight+'px'}">
				<block v-for="(item,index) in tealist" :key="index">
					<view class="header_wrapper" @click="goShopInfo">
						<img src="http://img0.imgtn.bdimg.com/it/u=440953885,2173090427&fm=11&gp=0.jpg" alt="" class="tea_img" />
						<view class="water_station_info">
							<view class="water_station_name">小贝水站</view>
							<view class="info">
								<view class="price">¥63</view>
								<view class="stock">库存120</view>
							</view>
						</view>
						<image src="http://qnimage.xiteng.com/right_icon@2x.png" mode="" class="next_icon"></image>
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
		},
		data() {
			return {
				mainHeight: 0,
				isclick: 0,
				tealist: [],
				categorylist: [{
						categoryitem: "热卖",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "1.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.4"
							}
						]
					},
					{
						categoryitem: "绿茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "2.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.4"
							}
						]
					},
					{
						categoryitem: "红茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "3.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.4"
							}
						]
					},
					{
						categoryitem: "乌龙茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "4.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.4"
							}
						]
					},
					{
						categoryitem: "黑茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "5.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.4"
							}
						]
					},
					{
						categoryitem: "白茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "6.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.4"
							}
						]
					},
					{
						categoryitem: "黄茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "7.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.4"
							}
						]
					},
					{
						categoryitem: "花草茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "8.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					}
				]
			}
		},
		methods: {
			addProduct() {
				uni.navigateTo({
					url: "/pages/product/product"
				})
			},
			changeStyle(index) {
				this.isclick = index;
				this.tealist = this.categorylist[index].list;
			},
			getteaList() {
				this.tealist = this.categorylist[0].list
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
					width: 14upx;
					height: 24upx;
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
