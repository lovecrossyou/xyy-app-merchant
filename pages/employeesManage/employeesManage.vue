<template>
	<view class="employees_wrapper">
		<block v-for="(employees,index) in employeesList" :key="index">
			<view class="employees_list_area">
				<view class="employees_left">
					<img src="http://qnimage.xiteng.com/zhulizhe.jpg" class="employees_img" />
					<view class="employees_name">{{employees.cnName}}</view>
				</view>
				<view class="employees_right" @click="goAddEmp(employees)">
					<view class="post_name">{{employees.roleContent}}</view>
					<img src="http://qnimage.xiteng.com/right_icon@2x.png" alt="" class="next_icon"/>
				</view>
			</view>
		</block>
		<button type="primary" @click="goAddEmp">添加</button>
	</view>
</template>

<script>
 import {
        mapState,
		mapMutations,
		mapActions
    } from 'vuex'	
export default {
	data() {
		return {
		};
	},
	components: {},
	computed:mapState({
		employeesList:state=>state.employe.userList
	}),
	methods: {
		...mapActions({
			fetchList:"employe/fetchList"
		}),
		goAddEmp(item){
			this.$store.commit("employe/setEmploye",item);
			uni.navigateTo({
				url:"./addEmployees"
			})
		}
	},
	async onLoad(opt) {
		const res = await this.fetchList();
	}
};
</script>

<style scoped>
.employees_wrapper {
	width: 100%;
	padding: 25upx;
	box-sizing: border-box;
	position: relative;
}
.employees_list_area {
	width: 100%;
	height: 110upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.employees_left,
.employees_right {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.employees_img {
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
}
.employees_name {
	color: #ff8638;
	font-size: 32upx;
	margin-left: 20upx;
}
.post_name {
	color: #555;
	font-size: 28upx;
	margin-right: 24upx;
}
.next_icon {
	width: 20upx;
	height: 32upx;
}
.employees_wrapper > button {
	width:94%;
	height: 88upx;
	background: rgba(255, 134, 56, 1);
	border-radius: 6upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	position: absolute;
	bottom: 30upx;
}
</style>
