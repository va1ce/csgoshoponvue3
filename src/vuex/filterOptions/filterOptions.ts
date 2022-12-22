import axios from "axios";
import {ISlider} from "@/src/Models/slider";
import {IShopItems} from "@/src/Models/shopItem";
import {ISelectOption} from "@/src/Models/selectOption";
import {IFileterOptions} from "@/src/Models/filterOptions";

export default {
    state: {
        filterOptions: [] as Array<IFileterOptions>,
        selectedCheckboxGroup: [] as Array<string>,
        selectOptions: [] as Array<ISelectOption>,
        selectedOption: '' as string,
        priceSliderValue: {} as ISlider,
        floatSliderValue: {} as ISlider,
    },
    getters: {
        FILTER_OPTIONS(state: any): Array<IFileterOptions> {
            return state.filterOptions;
        },
        SELECT_OPTIONS(state: any): Array<ISelectOption> {
            return state.selectOptions;
        },
    },
    mutations: {
        SET_OPTIONS_FROM_STATE: (state: any, options: object) => {
            state.filterOptions = options;
        },
        SET_SELECT_OPTIONS_FROM_STATE: (state: any, options: string) => {
            state.selectOptions = options;
        },
        SET_SELECTED_FILTER_TO_VUEX: (state: any, value: string) => {
            if (state.selectedCheckboxGroup.includes(value)) {
                state.selectedCheckboxGroup.splice(state.selectedCheckboxGroup.indexOf(value),1)
            }
            else {
                state.selectedCheckboxGroup.push(value)
            }
        },
        SET_PRICE_SLIDER_VALUE_FROM_STATE: (state: any, obj: ISlider) => {
            state.priceSliderValue = obj;
        },
        SET_FLOAT_SLIDER_VALUE_FROM_STATE: (state: any, obj: ISlider) => {
            state.floatSliderValue = obj;
        },
        SET_SELECTED_OPTION_TO_VUEX: (state: any, obj: ISelectOption) => {
            state.selectedOption = obj;
        },
        RESET_ALL_FILTERS: (state: any) => {
            state.selectedCheckboxGroup = []
            state.floatSliderValue = {};
            state.priceSliderValue = {};

        }
    },
    actions: {
        GET_OPTIONS_FROM_API({ commit }: any) {
            return axios('http://localhost:3000/options', {
                method: "GET"
            })
                .then((items) => {
                    commit('SET_OPTIONS_FROM_STATE', items.data);
                    return items;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_SELECT_OPTIONS_FROM_API({ commit }: any) {
            return axios('http://localhost:3000/selectOptions', {
                method: "GET"
            })
                .then((items) => {
                    commit('SET_SELECT_OPTIONS_FROM_STATE', items.data);
                    return items;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_SELECTED_FILTER_TO_VUEX({commit}: any, value: string) {
            commit('SET_SELECTED_FILTER_TO_VUEX', value);
        },
        GET_SELECTED_OPTION_TO_VUEX({commit}: any, obj: string) {
            commit('SET_SELECTED_OPTION_TO_VUEX', obj);
        },
        GET_PRICE_SLIDER_VALUE_TO_VUEX({commit}: any, obj: ISlider) {
            commit('SET_PRICE_SLIDER_VALUE_FROM_STATE', obj);
        },
        GET_FLOAT_SLIDER_VALUE_TO_VUEX({commit}: any, obj: ISlider) {
            commit('SET_FLOAT_SLIDER_VALUE_FROM_STATE', obj);
        },
        RESET_ALL_FILTERS({commit}: any) {
            commit('RESET_ALL_FILTERS');
        }
    }
}