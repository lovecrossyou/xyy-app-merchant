import api from '../../util/api.js'

const state = {
	selectAddress: {
		name: ''
	},
	orderList: [],
	orderListParams: {
		shopId: 29,
		orderStatus: "waiting_deal",
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
		const res = await api.orderList(data);
		if(res instanceof Array){
			commit('setOrderList', res);
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
