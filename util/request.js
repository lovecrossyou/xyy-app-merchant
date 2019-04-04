import Fly from 'flyio/dist/npm/wx'
import service from "../service"
const request = new Fly()
// const baseURL = 'http://47.94.169.143:7002'
const baseURL = "http://192.168.1.235:8004"


request.config.baseURL = baseURL

const errorPrompt = (err) => {
	console.log('errorPrompt ', err);
	uni.showToast({
		title: err.data.msg || 'fetch data error.',
		icon: 'none'
	})
}

request.interceptors.request.use((request) => {
	let cookie = wx.getStorageSync('cookieKey');
	if (cookie) {
		request.headers['Cookie'] = cookie;
	}
	return request;
})
request.interceptors.response.use((response, promise) => {
	if (response && response.headers && response.headers['set-cookie']) {
		wx.setStorageSync('cookieKey', response.headers['set-cookie'][0]); //保存Cookie到Storage
	}
	uni.hideLoading()
	console.log('response.data ',JSON.stringify(response.data));
	if (!(response.data.status === 0)) {
		if (response.data.status === "-999") {
			//需要登录权限
			this.$store.commit("setLogin", false)
			uni.redirectTo({
				url: '/pages/login/login'
			});
		} else {
			errorPrompt(response)
		}
	}
	return promise.resolve(response.data)
}, (err, promise) => {
	uni.hideLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request
