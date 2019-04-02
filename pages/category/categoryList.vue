<template>
	<view class="wrapper">
		<view class="category_list">
			<block v-for="(item,index) in categoryList" :key="index">
				<categoryListTemplate :item='item' :itemClick="itemClick" :editClick="editClick"></categoryListTemplate>
			</block>
		</view>
		<button type="primary" class="add_category_btn" @click="addCategory">添加分类</button>
	</view>
</template>

<script>
	import categoryListTemplate from '@/pages/category/components/categoryListTemplate.vue';
	import api from "../../util/api.js"
	import {
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				goBack: false
			};
		},
		computed:{
			categoryList(){
				return this.$store.state.category.list;
			}
		},
		components: {
			categoryListTemplate
		},

		onLoad(options) {
			if (options.goBack) {
				this.goBack = true;
			}
			this.fetchCategoryList();
		},
		methods: {
			...mapMutations({
				"setCategory": 'product/setCategory'
			}),
			editClick(data) {
				console.log('data ', data);
				this.setCategory(data);
				uni.navigateTo({
					url: '/pages/category/addCategory'
				});
			},
			itemClick(data) {
				console.log('data ', data);
				this.setCategory(data);
				uni.navigateBack();
			},
			addCategory() {
				uni.navigateTo({
					url: '/pages/category/addCategory'
				});
			},
			fetchCategoryList() {
				this.$store.dispatch('category/list');
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		width: 100%;
		padding: 0 25upx;
		box-sizing: border-box;
		position: relative;
	}

	.category_list {
		width: 100%;
		padding: 25upx 0;
		box-sizing: border-box;
		background-color: #fff;
	}

	.add_category_btn {
		width: 94%;
		height: 88upx;
		background: #FF8638;
		border-radius: 6upx;
		text-align: center;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		position: absolute;
		bottom: 30upx;
	}
</style>
