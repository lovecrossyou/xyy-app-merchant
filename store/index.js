import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product.js'
import employe from './modules/employe.js'
import shop from './modules/shop.js'
import category from './modules/category.js'

import api from '../util/api.js'

import servcie from "../service.js"


Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		product,
		employe,
		shop,
		category
	},
	state: {
		pushMessage: {},  
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		userName: "",
		shopId: 13,
		userInfo: null,
		shopInfo:{
			imageUrl:'',
			mobilePhone:''
		},
		clientInfo:null//获取客户端推送信息
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
			servcie.clearInfo()
		},
		setInfo(state, data) {
			state.shopId = data.id;
			state.userInfo = data;
		},
		setShopInfo(state, data) {
			state.shopInfo = data;
		},
		
		saveClientInfo(state,data){
			state.clientInfo = data;
		},
		
		updatePushMessage(state, message) {  
            /**  
             * 注意：这里为了方便预览查看效果，始终对 payload 做了序列化的处理。  
             * 实际开发期中，请自行调整代码并注意发送的 payload 消息格式。  
             */   
            let payload = message.payload;  
            if (typeof payload !== 'string') {  
                message.payload = JSON.stringify(payload);  
            }  
            state.pushMessage = message || {};  
        } 
	},
	actions: {
		async fetchShopInfo({commit,state}){
			const res = await api.shopInfo({
				"sn": state.userInfo.shopSn
			});
			commit('setShopInfo', res.data);
		},
		async appLogin({
			commit
		},params) {
			const {data, cb} = params;
			const res = await api.login(data);
			if (res.status === 0) {
				commit('login', res.data);
				//持久化
				servcie.addInfo(res.data)
				uni.reLaunch({
					url: '/pages/home/home'
				});
				cb();
			}
		},
		//注册到推送服务器
		async registeToUNPush({ commit, state }){
			const clientInfo = state.clientInfo;
			const params = Object.assign({},{...clientInfo})
			console.log('registeToUNPush ',JSON.stringify(params));
			if(!clientInfo)return;
			api.registePush(params,res=>{
				console.log('registePush ok ',JSON.stringify(res));
			});
		}
	}
})

export default store
