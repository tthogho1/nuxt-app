import Vuex from 'vuex'
//import CreatePersistedState from "vuex-persistedstate"

export const state = ()=>({
	message: 'count number.',
	couter:0,
})

export const mutations =  {
	doit(state){
		var n = Math.floor(Math.random());
		state.counter += n;
		state.message = 'add ' + n + '.';
	},
	reset(){
		state.counter = 0;
		state.message = "reset now.";
	}
}

//export const plugins = [
//	CreatePersistedState(),/
//]