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
	}
}


export default {
	namespaced: true,
	state,
	actions,
	mutations
}
