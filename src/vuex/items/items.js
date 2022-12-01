import axios from "axios";
export default {
    state: {
        searchValue: '',
        items: [],
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
    },
    mutations: {
        SET_ITEMS_FROM_STATE: (state, items) => {
            state.items = items;
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
    },
}