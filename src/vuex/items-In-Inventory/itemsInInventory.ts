import axios from "axios";
import {IShopItems} from "@/src/Models/shopItem";
export default {
    state: {
        itemsInInventory:[] as Array<IShopItems>,
        sortedItemsInInventory: []
    },
    getters: {
        ITEMS_IN_IVENTORY(state: any) {
            return state.itemsInInventory
        },
        GET_SORT_AND_FILTER_ITEMS_IN_INVENTORY(state: any, getters: any, rootState: any) {
            state.sortedItemsInInventory = [...state.itemsInInventory]

            // SORT BY SEARCH VALUE
            if (rootState.searchValue.searchValue) {
                state.sortedItemsInInventory = state.filterAndSortItems.filter((item: IShopItems) => {
                    return item.name.toLowerCase().includes(rootState.searchValue.searchValue.toLowerCase())
                })
            }

            // SORT BY SELECTED OPTION
            if (rootState.filterOptions.selectedOption == 'priceDesc') {
                state.sortedItemsInInventory.sort((a: any, b: any) => b.price - a.price);
            }
            if (rootState.filterOptions.selectedOption == 'priceAsc') {
                state.sortedItemsInInventory.sort((a: any, b: any) => a.price - b.price);
            }

            return state.sortedItemsInInventory
        },
    },
    mutations: {
        SET_ITEMS_IN_INVENTORY_FROM_STATE: (state: any, items: IShopItems) => {
            state.itemsInInventory = items;
        },
    },
    actions: {
        GET_ITEMS_IN_INVENTORY_FROM_API({ commit }: any) {
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