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
			"leader": '',
			"promotion_info": "欢迎光临",
			"float_delivery_fee": '',
			"float_minimum_order_amount": '',
			"startTime": "09:00",
			"endTime": "21:00",
			"image_path": "",
			"image_label_path": "",
			"image_bucket_path": "",
			"image_bung_path": "",
			"image_package_path": "",
			"business_license_image": "",
			"catering_service_license_image": "",
			"activities": [],
			"category": "请选择",
			"leader_identity_card": {
				"positive_side": "",
				"negative_side": ""
			},
			"brand_sale_protocol_image": ""
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
		},
		appendCode(state, code) {
			state.shopInfo.code = code;
		},
		resetShopInfo(state){
			const shopInfo = state.shopInfo;
			Object.keys(shopInfo).forEach(key => shopInfo[key] = '');
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
		}, data) {
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
					await api.pushRegiste({
						client_info: clientInfo
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
