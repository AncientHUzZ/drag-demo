import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  selectedItem: {},
    },
	mutations: {
	  SET_SELECTED_ITEM:(state,payload) => {
	    state.selectedItem = payload
      }
    },
	actions: {
	  changeSelectedItem({ commit }, payload) {
	    commit('SET_SELECTED_ITEM', payload)
      }
    },
	modules: {}
})
