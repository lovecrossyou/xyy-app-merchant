import Fly from 'flyio/dist/npm/wx'
import service from "../service"
const request = new Fly()
// const baseURL = 'https://api.kuaimayoupin.com'
// const baseURL = 'http://47.94.169.143:7002'
export const baseURL = 'http://47.94.169.143:8004'
// export const baseURL = 'http://127.0.0.1:8004'

request.config.baseURL = baseURL

const errorPrompt = (err) => {
	console.log('errorPrompt ',err);
	uni.showToast({
		title: err.message || 'fetch data error.',
		icon: 'none'
	})
}

request.interceptors.request.use((request) => {
	let cookie = uni.getStorageSync('cookieKey');
	if (cookie) {
		request.headers['Cookie'] = cookie;
	}
	return request
})

request.interceptors.response.use((response, promise) => {
	uni.hideLoading()
	if (response && response.headers && response.headers['set-cookie']) {
		uni.setStorageSync('cookieKey', response.headers['set-cookie'][0]); //保存Cookie到Storage
	}
	console.log('response.data ',response.data)
	if(response.data.message){
		errorPrompt(response.data);
		return Promise.resolve(null);
	}
	return promise.resolve(response.data)
}, (err, promise) => {
	uni.hideLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request
