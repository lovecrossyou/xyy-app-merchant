import api from '../../util/api.js'

const state = {
	selectAddress: {
		name: ''
	},
	orderList: [],
	orderListParams: {
		shopId: 2,
		page: "1",
		pageSize: "20"
	},
	currentOrder:null
}

const mutations = {
	setAddr(state, data) {
		state.selectAddress = data;
	},
	setOrderList(state, data) {
		state.orderList = data;
	},
	setOrder(state, data) {
		state.currentOrder = data;
	}
}


const actions = {
	async fetchOrderList({
		state,
		commit
	}, data) {
		let res;
		if(data==null){
			res = await api.orderList(state.orderListParams);
		}
		else{
			res = await api.orderList({
				...state.orderListParams,
				orderStatus:data
			});
		}
		
		if (res.status === 'ok') {
			commit('setOrderList', res.data.content)
		}
	},
	async productRemove({
		state,
		commit,
		dispatch
	}, data) {
		const res = await api.productRemove(data);
		if (res.status === 'ok') {
			// dispatch('product/fetchProductList',null, { root: true });
			uni.showToast({
				title:"删除成功"
			})
		}
	}
}


export default {
	namespaced: true,
	state,
	actions,
	mutations
}
