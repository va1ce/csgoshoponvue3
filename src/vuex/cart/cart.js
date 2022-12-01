export default {
    state: {
        cart: [],
    },
    getters: {
        CART(state) {
            return state.cart;
        },
    },
    mutations: {
        SET_CART: (state, item) => {
            state.cart.push(item)
        },
        REMOVE_FROM_CART: (state, id) => {
            state.cart = state.cart.filter((value) => {
                return value.id != id
            })
        },
        REMOVE_ALL_CART: (state) => {
            state.cart = []
        },
    },
    actions: {
        ADD_TO_CART({commit}, item) {
            commit('SET_CART', item);
        },
        DELETE_FROM_CART({commit}, id) {
            commit('REMOVE_FROM_CART', id)
        },
        DELETE_ALL_CART({commit}) {
            commit('REMOVE_ALL_CART')
        }
    }
}