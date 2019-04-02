<template>
	<view class="add_category_wrapper">
		<view class="add_area">
			<view class="name_text">名称</view>
			<input type="text" v-model="formData.name" placeholder="请填写分类名称" />
		</view>
		<view class="add_area">
			<view class="name_text">排序</view>
			<input type="text" v-model="formData.sortVal" placeholder="请填写数字(选填)" />
		</view>
		<button type="primary" @click="addCategory">完成</button>
	</view>
</template>

<script>
	import api from "../../util/api.js"

	export default {
		components: {},
		computed:{
			formData(){
				return this.$store.state.product.category;
			}
		},
		methods: {
			async addCategory() {
				console.log("formData ",this.formData);
				const res = this.formData.id?await api.editCategory(this.formData) : await api.addCategory(this.formData);
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
