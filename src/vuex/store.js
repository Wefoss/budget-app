import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list: {
            1: { type: "INCOME", value: 100, comment: "some comment", id: 1 },
            2: { type: "OUTCOME", value: -50, comment: "some comment", id: 2 },
        }
    },
    mutations: {
        ADD_USER_LIST(state, newUser) {
            if (newUser.type === 'OUTCOME') {
                newUser.value = -Math.abs(newUser.value)
            }
            Vue.set(state.list, newUser.id, newUser)
            console.log(state.list);
            },

            DELITE_USER_LIST(state, id) {
                Vue.delete(state.list, id)
                
            }
    },
    actions: {
        ADD_LIST({ commit }, newListProduct) {
            const newUser = { ...newListProduct, id: String(Math.random()) }
            commit('ADD_USER_LIST', newUser)
        },
         DELITE_LIST({commit},  id) {
             commit('DELITE_USER_LIST', id)
         }
    },
    getters: {
      GET_LIST(state) {
          return state.list
      }
    },

})

export default store