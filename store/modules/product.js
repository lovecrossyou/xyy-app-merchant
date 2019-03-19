const state = {
	category:{
		name:''
	}
}

const mutations = {
	setCategory(state,data){
		state.category = data;
	}
}

export default{
	namespaced:true,
	state,
	mutations
}