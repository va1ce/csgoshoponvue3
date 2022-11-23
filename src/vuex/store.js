import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        searchValue: '',
        items: [],
        cart: []
    },
    getters: {
        SEARCH_VALUE(state) {
            return state.searchValue;
        },
        ITEMS(state) {
            return state.items;
        },
        CART(state) {
            return state.cart;
        }
    },
    mutations: {
        SET_SEACRH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value;
        },
        SET_ITEMS_FROM_STATE: (state, items) => {
            state.items = items;
        },
        SET_CART: (state, item) => {
            state.cart.push(item)
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        REMOVE_ALL_CART: (state) => {
            state.cart = []
        },
        
    },
    actions: {
        GET_SEACRH_VALUE_TO_VUEX ({ commit }, value) {
            commit('SET_SEACRH_VALUE_TO_VUEX', value);
        },
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
        },
        DELETE_ALL_CART({commit}) {
            commit('REMOVE_ALL_CART')
        }
    },
    modules: {

    },
})
