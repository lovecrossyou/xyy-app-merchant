import api from '../../util/api.js'
const state = {
	employe:null,
	userList:[],
	editUser:null
}


const mutations ={
	setEmploye(state,data){
		state.employe = data;
	},
	setList(state,data){
		state.userList = data;
	},
	setUser(state,data){
		state.editUser = data;
	}
}

const actions = {
	async fetchList({
		commit,
		state,
		rootState
	}, data) {
		const params = {
			id: rootState.shopId
		}
		const res = await api.userList(params);
		if (res.status === 'ok') {
			commit('setList', res.data)
		}
	},
	async editUser({
		commit,
		state,
		rootState
	}, data) {
		const params = {
			id: rootState.shopId
		}
		const res = await api.userEdit(params);
// 		if (res.status === 'ok') {
// 			commit('setList', res.data)
// 		}
	},
	async addUser({
		commit,
		state,
		rootState
	}, data) {
		const params = {
			id: rootState.shopId
		}
		const res = await api.userAdd(params);
// 		if (res.status === 'ok') {
// 			commit('setList', res.data)
// 		}
	}
}


export default{
	namespaced:true,
	state,
	actions,
	mutations
}