<template>
	<view class="add_category_wrapper">
		<view class="add_area">
			<view class="name_text">名称</view>
			<input type="text" v-model="formData.name" placeholder="请填写商品种类" />
		</view>
		<view class="add_area">
			<view class="name_text">描述</view>
			<input type="text" v-model="formData.description" placeholder="请填写种类描述" />
		</view>
		<button type="primary" @click="addCategory">完成</button>
	</view>
</template>

<script>
	import api from "../../util/api.js"
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {

		data() {
			return {
				formData: {
					"name": "",
					"description": ''
				}
			};
		},
		components: {},
		computed: mapState(['shopInfo']),
		methods: {
			async addCategory() {
				this.formData.restaurant_id = this.shopInfo.id;
				const res = await api.addCategory(this.formData);
				uni.navigateBack({

				})
			}
		}
	};
</script>

<style scoped>
	.add_category_wrapper {
		width: 100%;
		padding: 25upx;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.add_area {
		width: 100%;
		height: 70upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.name_text {
		color: #555555;
		font-size: 28upx;
		width: 15%;
	}

	.add_area>input {
		flex: 1;
		font-size: 24upx;
		color: #999999;
	}

	.add_category_wrapper>button {
		width: 94%;
		height: 88upx;
		background: rgba(255, 134, 56, 1);
		border-radius: 6px;
		text-align: center;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		position: absolute;
		bottom: 30upx;
	}
</style>
