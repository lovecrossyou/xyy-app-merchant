import api from '../../util/api.js'

const state = {
	category: {
		name: ''
	},
	editProduct: {
		"name": "",
		"description": "",
		"image_path": "",
		"activity": "",
		"attributes": [],
		"specs": [{
			"specs": "默认",
			"packing_fee": 0,
			"price": 0
		}],
		"category_id": 0,
		"restaurant_id": 0
	},
	productList: [],
	menus: []
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
	},
	setMenus(state, data) {
		state.menus = data;
	}
}


const actions = {
	async fetchProductList({
		commit,
		state,
		rootState
	}, data) {
		const res = await api.productList(data);
		commit('setProductList', res);
	},
	async menus({
		commit,
		state,
		rootState
	}, data) {
		const res = await api.menu({
			restaurant_id: this.shopInfo.id,
		});
		commit('setMenus', res);
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}
