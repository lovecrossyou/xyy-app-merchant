import api from '../../util/api.js'

const state = {
	selectAddress: {
		name: ''
	},
	orderList: [1, 2],
	orderListParams: {
		shopId: 29,
		orderStatus: "waiting_deal",
		page: "1",
		pageSize: "20"
	}
}

const mutations = {
	setAddr(state, data) {
		state.selectAddress = data;
	},
	setOrderList(state, data) {
		state.orderList = data;
	}
}


const actions = {
	async fetchOrderList({
		state,
		commit
	}, data) {
		const res = await api.orderList(state.orderListParams);
		if (res.status === 'ok') {
			commit('setOrderList', res.data.comtent)
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
