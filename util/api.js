import request from './request'
import Fly from 'flyio/dist/npm/wx'

const uploadBaseUrl = "http://47.94.169.143:8004"
const searchBaseUrl = "http://47.94.169.143:8004"
const api = {

	requestCartClient: (params) => request.post("client/shop/cartClient", params),
	deliveryAddressList: (params) => request.post("client/deliveryAddress/list", params),
	deliveryAddressCreate: (params) => request.post("client/deliveryAddress/create", params),
	// searchNearby: (params) => request.get("client/common/searchAddress", params),
	deliveryAddressEdit: (params) => request.post("client/deliveryAddress/edit", params),
	shopOrderCreate: (params) => request.post("client/shopOrder/create", params),
	keplerPayConfirm: (params) => request.post("client/keplerPay/confirm", params),
	getDefaultAddress: (params) => request.post("client/deliveryAddress/getDefault", params),
	//支付成功后的结果查询
	queryResult: (params) => request.post("client/keplerPay/queryResult", params),

	getAddress: (params) => request.post("client/keplerPay/queryResult", params),
	getUser: (params) => request.post("client/keplerPay/queryResult", params),
	postAddAddress: (params) => request.post("client/keplerPay/queryResult", params),

	// 分类列表
	categoryList: data => request.post("/merchant/shop/productCategory/list", data, 'POST'),
	addCategory: data => request.post("/merchant/shop/productCategory/create", data, 'POST'),

	// 添加商品
	createProduct: data => request.post("/merchant/shop/createProduct", data, 'POST'),
	editProduct: data => request.post("/merchant/shop/editProduct", data, 'POST'),

	// 商品列表
	productList: data => request.post("/merchant/shop/productListWithCategory", data, 'POST'),

	// 店铺信息
	shopInfo: data => request.post("/merchant/shop/info", data, 'POST'),
	
	
	//地址搜索
	searchNearby: (data,cb) => {
		uni.request({
			url: searchBaseUrl+'/map/search',
			data: data,
			method:'POST',
			success: (res) => {
				cb(res.data);
			}
		});
	},
	//上传
	uploader: (file, cb) => {
		uni.uploadFile({
			url: uploadBaseUrl + '/manage/qiniu/upload',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				if (parseInt(data.status) === 0) {
					cb(data.data);
				}
			}
		});
	}

}
export default api
