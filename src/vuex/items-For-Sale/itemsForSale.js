export default {
    state: {
        itemsForSale: [],
    },
    getters: {
        ITEMS_FOR_SALE(state) {
            return state.itemsForSale;
        },
    },
    mutations: {
        SET_ITEM_FOR_SALE: (state, item) => {
            state.itemsForSale.push(item)
        },
        REMOVE_FROM_ITEM_FOR_SALE: (state, id) => {
            state.itemsForSale = state.itemsForSale.filter((value) => {
                return value.id != id
            })
        },
    },
    actions: {
        ADD_TO_ITEMS_FOR_SALE({ commit }, item) {
            commit('SET_ITEM_FOR_SALE', item);
        },

        DELETE_FROM_ITEMS_FOR_SALE({ commit }, id) {
            commit('REMOVE_FROM_ITEM_FOR_SALE', id)
        },
    }
}