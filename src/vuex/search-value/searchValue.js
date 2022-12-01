export default {
    state: {
        searchValue: '',
    },
    getters: {
        SEARCH_VALUE(state) {
            return state.searchValue;
        },
    },
    mutations: {
        SET_SEACRH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value;
        },
    },
    actions: {
        GET_SEACRH_VALUE_TO_VUEX({ commit }, value) {
            commit('SET_SEACRH_VALUE_TO_VUEX', value);
        },
    },
}