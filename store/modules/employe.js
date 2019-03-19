const state = {
	employe:null
}


const mutations ={
	setEmploye(state,data){
		state.employe = data;
	}
}

export default{
	namespaced:true,
	state,
	mutations
}