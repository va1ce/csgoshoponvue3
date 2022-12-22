import {IShopItems} from "@/src/Models/shopItem";

export default {
    state: {
        cart: [],
    },
    getters: {
        CART(state: any) {
            return state.cart;
        },
    },
    mutations: {
        SET_CART: (state: any, item: IShopItems) => {
            state.cart.push(item)
        },
        REMOVE_FROM_CART: (state: any, id:string) => {
            state.cart = state.cart.filter((value: IShopItems) => {
                return value.id != id
            })
        },
        REMOVE_ALL_CART: (state: any) => {
            state.cart = []
        },
    },
    actions: {
        ADD_TO_CART({commit}:any, item:IShopItems) {
            commit('SET_CART', item);
        },
        DELETE_FROM_CART({commit}: any, id: string) {
            commit('REMOVE_FROM_CART', id)
        },
        DELETE_ALL_CART({commit}: any) {
            commit('REMOVE_ALL_CART')
        }
    }
}