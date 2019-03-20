const state = {
	selectAddress:{
		name:''
	}
}

const mutations = {
	setAddr(state,data){
		state.selectAddress = data;
	}
}


export default{
	namespaced:true,
	state,
	mutations
}