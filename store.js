import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
state: {
	count: 1
},

getters: {
	getDouble( state, g ) {
return state.count * 2
	}
},

mutations: {
	increment( state, payload = {} ) {
	state.count += payload.number || 1
	},

	decremente(state) {
		state.count --
	}
},

actions: {
	incrementAsync ( context, payload ) {
		return new Promise((resolve, reject) => {
setTimeout(( ) => {
	context.commit('increment', payload)
	resolve ( )
}, 2000)
		})
	}
}
})

export default store;