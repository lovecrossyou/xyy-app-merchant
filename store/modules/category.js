import api from '../../util/api.js'



export default {
	namespaced:true,
	state: {
		list: [],
		formData: null,
	},
	actions: {
		async list({
			commit,
			state,
			rootState
		}, params) {
			const shopId = rootState.shopInfo.id;
			const res = await api.categoryList({id:shopId});
			state.list = res.data;
		}
	}
}
