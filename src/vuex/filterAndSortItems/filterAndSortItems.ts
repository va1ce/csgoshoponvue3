import {IShopItems} from "@/src/Models/shopItem";
import {ISlider} from "@/src/Models/slider";


export default {
    state: {
        filterAndSortItems: [] as Array<IShopItems>,
        pagination_items_per_page: 10,
        page: 1,
        pagination_offset:0,
        pageCount: 4,
    },
    getters: {
        GET_SORT_AND_FILTER_ITEMS(state: any, getters: any, rootState: any) {
            state.filterAndSortItems = [...rootState.items.items]
            // SORT BY PRICE
            if (rootState.filterOptions.priceSliderValue.gte || rootState.filterOptions.priceSliderValue.lte) {
                state.filterAndSortItems = state.filterAndSortItems.filter((item: IShopItems) => {
                    return item.price >= (rootState.filterOptions.priceSliderValue.gte == "" ?  rootState.filterOptions.priceSliderValue.gte = 0 :rootState.filterOptions.priceSliderValue.gte) && item.price <= (rootState.filterOptions.priceSliderValue.lte == "" ?  rootState.filterOptions.priceSliderValue.lte = 99999 :rootState.filterOptions.priceSliderValue.lte)
                });
            }

            // SORT BY FLOAT
            if (rootState.filterOptions.floatSliderValue.gte || rootState.filterOptions.floatSliderValue.lte) {
                state.filterAndSortItems = state.filterAndSortItems.filter((item: IShopItems) => {
                    return item.float >= (rootState.filterOptions.floatSliderValue.gte == "" ?  rootState.filterOptions.floatSliderValue.gte = 0 :rootState.filterOptions.floatSliderValue.gte) && item.float <= (rootState.filterOptions.floatSliderValue.lte == "" ?  rootState.filterOptions.floatSliderValue.lte = 99999 :rootState.filterOptions.floatSliderValue.lte)
                });
            }

            // SORT BY PROPERTIES
            if (rootState.filterOptions.selectedCheckboxGroup.length) {
                state.filterAndSortItems = state.filterAndSortItems.filter((item: IShopItems) => {
                    return item.properties.some(r => rootState.filterOptions.selectedCheckboxGroup.includes(r))
                });
            }

            // SORT BY SEARCH VALUE
            if (rootState.searchValue.searchValue) {
                state.filterAndSortItems = state.filterAndSortItems.filter((item: IShopItems) => {
                    return item.name.toLowerCase().includes(rootState.searchValue.searchValue.toLowerCase())
                })
            }

            // SORT BY SELECTED OPTION
            if (rootState.filterOptions.selectedOption == 'priceDesc') {
                state.filterAndSortItems.sort((a: any, b: any) => b.price - a.price);
            }
            if (rootState.filterOptions.selectedOption == 'priceAsc') {
                state.filterAndSortItems.sort((a: any, b: any) => a.price - b.price);
            }
            if (rootState.filterOptions.selectedOption == 'floatDesc') {
                state.filterAndSortItems.sort((a:IShopItems, b: IShopItems) => {
                    if (a.float === b.float) {
                        return 0;
                    }
                    if (a.float === '') {
                        return 1;
                    }
                    if (b.float === '') {
                        return -1;
                    }
                    return a.float < b.float ? 1 : -1;
                });
            }
            if (rootState.filterOptions.selectedOption.type == 'floatAsc') {
                state.filterAndSortItems.sort((a:IShopItems, b:IShopItems) => {
                    if (a.float === b.float) {
                        return 0;
                    }
                    if (a.float === '') {
                        return 1;
                    }
                    if (b.float === '') {
                        return -1;
                    }
                    return a.float < b.float ? -1 : 1;
                });
            }
            state.pagination_offset = (state.pagination_items_per_page * state.page) - state.pagination_items_per_page
            state.pageCount = Math.ceil(state.filterAndSortItems.length / state.pagination_items_per_page)
            state.filterAndSortItems = state.filterAndSortItems.splice(state.pagination_offset, state.pagination_items_per_page)

            return state.filterAndSortItems
        },
        PAGE_COUNT(state: any) {
            return state.pageCount
        }
    },
    mutations: {
        SET_FILTERED_AND_SORT_ITEMS: (state: any, obj: IShopItems) => {
            state.filterAndSortItems = obj
        },
        SET_PAGE: (state: any, page: number) => {
            state.page = page
        },
    },
    actions: {
        SET_FILTERED_AND_SORT_ITEMS_TO_VUEX({commit}: any, obj: Array<IShopItems>) {
            commit('SET_FILTERED_AND_SORT_ITEMS', obj);
        },
        SET_PAGE_TO_VUEX({commit}: any, page: number) {
            commit('SET_PAGE', page);
        }
    }
}