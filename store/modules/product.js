import api from '../../util/api.js'

const state = {
	category: {
		name: ''
	},
	editProduct: {
		"headName": "",
		"price": '',
		"originalPrice": '',
		"tag": "",
		"spec": "",
		"brand": "",
		"productDescribe": "",
		"categoryId": 0,
		"listImage": "",
		"headImage": "",
		"detailImages": []
	},
	productList: []
}

const mutations = {
	setCategory(state, data) {
		state.category = data;
	},
	setProduct(state, data) {
		state.editProduct = data;
	},
	setProductList(state, data) {
		state.productList = data;
	}
}

const actions = {
	async fetchProductList({
		commit,
		state
	}, params) {
		const res = await api.productList(params);		
		if (res.status === 'ok') {
			commit('setProductList', res.data)
		}
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
