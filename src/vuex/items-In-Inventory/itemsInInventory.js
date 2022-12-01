import axios from "axios";
export default {
    state: {
        itemsInInventory:[],
    },
    getters: {
        ITEMS_IN_IVENTORY(state) {
            return state.itemsInInventory
        }
    },
    mutations: {
        SET_ITEMS_IN_INVENTORY_FROM_STATE: (state, items) => {
            state.itemsInInventory = items;
        },
    },
    actions: {
        GET_ITEMS_IN_INVENTORY_FROM_API({ commit }) {
            return axios('http://localhost:3000/items', {
                method: "GET"
            })
                .then((items) => {
                    commit('SET_ITEMS_IN_INVENTORY_FROM_STATE', items.data);
                    return items;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
    }
}