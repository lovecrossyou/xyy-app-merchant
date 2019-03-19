import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		product
	},
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
