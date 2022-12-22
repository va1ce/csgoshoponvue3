import axios from "axios";
import {IShopItems} from "@/src/Models/shopItem";
export default {
    state: {
        items: [],
    },
    getters: {
        ITEMS(state: any) {
            return state.items;
        },
    },
    mutations: {
        SET_ITEMS_FROM_STATE: (state: any, items: Array<IShopItems>) => {
            state.items = items;
        },
    },
    actions: {
        GET_ITEMS_FROM_API({ commit , rootState}: any) {
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