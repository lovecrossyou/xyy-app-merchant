import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product.js'
import employe from './modules/employe.js'
import shop from './modules/shop.js'
import api from '../util/api.js'

import servcie from "../service.js"


Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		product,
		employe,
		shop
	},
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		userName: "",
		shopId: 13,
		userInfo: null
	},
	mutations: {
		login(state, userInfo) {
			state.userInfo = userInfo;
			state.shopId = userInfo.shopId;
			state.hasLogin = true;
		},
		logout(state) {
			state.userInfo = null;
			state.hasLogin = false;
		},
		setInfo(state, data) {
			state.userInfo = data;
		}
	},
	actions: {
		async appLogin({
			commit
		}, data, cb) {
			const res = await api.login(data);
			if (res.status === 'ok') {
				commit('login', res.data);
				//持久化
				servcie.addInfo(res.data)
				uni.reLaunch({
					url: '/pages/home/home'
				});
			}
		}
	}
})

export default store
