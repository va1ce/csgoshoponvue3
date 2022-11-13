import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        items: [],
        cart: []
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
        CART(state) {
            return state.cart;
        }
    },
    mutations: {
        SET_ITEMS_FROM_STATE: (state, items) => {
            state.items = items;
        },
        SET_CART: (state, item) => {
            state.cart.push(item)
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        
    },
    actions: {
        GET_ITEMS_FROM_API({ commit }) {
            return axios('http://localhost:3000/items', {
                method: "GET"
            })
                .then((items) => {
                    commit('SET_ITEMS_FROM_STATE', items.data);
                    return items;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({commit}, item) {
            commit('SET_CART', item);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    modules: {

    },
})
