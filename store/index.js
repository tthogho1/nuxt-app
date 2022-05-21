import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: function(){
			return {
				message: 'count number',
				counter: 0,
			};
		},
		mutations: {
			count: function(state,obj){
				state.message = obj.message;
				state.counter += obj.add;
			},
			add:function(state,n){
				state.counter += n
			},
			say:function(state,msg){
				state.message=msg;
			},
			reset: function(state){
				state.counter=0;
			}
		},
		actions:{
			doit:function(context){
				var n= Math.floor(Math.random() * 10)
				context.commit('add',n);
				context.commit('say','add ' + n + '!');
			}
		}
	})
}

export default createStore