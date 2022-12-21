export default {
    state: {
        searchValue: '',
    },
    getters: {
        SEARCH_VALUE(state: any) {
            return state.searchValue;
        },
    },
    mutations: {
        SET_SEACRH_VALUE_TO_VUEX: (state: any, value: string) => {
            state.searchValue = value;
        },
    },
    actions: {
        GET_SEACRH_VALUE_TO_VUEX({ commit }: any, value: string) {
            commit('SET_SEACRH_VALUE_TO_VUEX', value);
        },
    },
}