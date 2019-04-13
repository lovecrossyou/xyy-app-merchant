import request from './request'
import Fly from 'flyio/dist/npm/wx'
import {baseURL} from './request.js'
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
	categoryList: restaurant_id => request.get("/merchant/getcategory/"+restaurant_id),
	getCategory: ()=>request.get('/merchant/v2/restaurant/category'),
	addCategory: data => request.post("/merchant/addcategory", data, 'POST'),

	// 添加商品
	createProduct: data => request.post("/merchant/addfood", data, 'POST'),
	editProduct: data => request.post("/merchant/v2/updatefood", data, 'POST'),
	
	menu: data=>request.get('/merchant/v2/menu',data),
	// 商品列表
	productList: data => request.get("/merchant/v2/foods",data),

	// 店铺信息
	shopInfo: restaurant_id => request.get("/merchant/restaurant/"+restaurant_id),

	// 更新店铺信息 
	shopUpdate: data => request.post("/merchant/updateshop", data, 'POST'),

	// 登录
	login: data => request.post("/merchant/login", data, 'POST'),

	// 订单列表
	orderList: data => request.get("/merchant/orders", data),
	
	address :addr_id=>request.get('/v1/addresse/'+addr_id),
	
	// 删除商品 merchant/shop/productRemove "id": 1
	productRemove: data => request.post("/merchant/shop/productRemove", data, 'POST'),

	// 下架商品 merchant/shop/productStatusReverse "id": 1
	productStatusReverse: data => request.post("/merchant/shop/productStatusReverse", data, 'POST'),

	// 订单发货 merchant/shopOrder/confirmDeliver "orderNo": "1111111"
	confirmDeliver: data => request.post("/merchant/shop/confirmDeliver", data, 'POST'),
	
	// 创建店铺
	createShop: data => request.post("/merchant/createShop", data, 'POST'),

	//地址搜索
	searchNearby:data=> request.get('/v1/pois?type=search&keyword='+data.keywords),
	//上传
	uploader: (file, cb) => {
		uni.uploadFile({
			url: baseURL + '/v1/addimg/shop',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				cb(data);
			}
		});
	}

}
export default api
