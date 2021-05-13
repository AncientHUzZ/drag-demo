import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		selectedItem: {},
		selectedItemToLink: null
	},
	mutations: {
		SET_SELECTED_ITEM: (state, payload) => {
			state.selectedItem = payload
		},
		SET_SELECTED_ITEM_TO_LINK: (state, payload) => {
			state.selectedItemToLink = payload
		}
	},
	actions: {
		changeSelectedItem({commit}, payload) {
			commit('SET_SELECTED_ITEM', payload)
		},
		changeSelectedItemToLink({commit}, payload) {
			commit('SET_SELECTED_ITEM_TO_LINK', payload)
		}
	},
	modules: {}
})
