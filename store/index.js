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
		userInfo: null,
		shopInfo: {
			"name": "",
			"address": "",
			"latitude": 39.92843,
			"longitude": 116.35073,
			"description": "",
			"phone": '',
			"promotion_info": "欢迎光临",
			"float_delivery_fee": '',
			"float_minimum_order_amount": '',
			"startTime": "09:00",
			"endTime": "21:00",
			"image_path": "",
			"business_license_image": "",
			"catering_service_license_image": "",
			"activities": [],
			"category": "请选择"
		},
		clientInfo: null
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
		},
		setShopInfo(state, data) {
			state.shopInfo = data;
		},
		saveClientInfo(state, data) {
			state.clientInfo = data;
		}
	},
	actions: {
		async fetchShopInfo({
			commit,
			state
		}) {
			const restaurant_id = state.userInfo.restaurant_id;
			const res = await api.shopInfo(restaurant_id);
			commit('setShopInfo', res);
		},
		async sendSms({
			commit,
			state
		},data){
			await api.sendSms(data);
		},
		async appLogin({
			commit,
			state
		}, data, cb) {
			const res = await api.login(data);
			if (res.status === 1) {
				commit('login', res.data);
				//持久化
				servcie.addInfo(res.data)
				uni.reLaunch({
					url: '/pages/home/home'
				});
				const clientInfo = state.clientInfo;
				if (clientInfo) {
					console.log('clientInfo## ',JSON.stringify(clientInfo));
					await api.pushRegiste({
						client_info:clientInfo
					});
				}
			}
		},
		async registePush({
			commit,
			state
		}, data) {
			const clientInfo = state.clientInfo;
			if (clientInfo) {
				await api.pushRegiste(clientInfo);
			}
		}
	}
})

export default store
