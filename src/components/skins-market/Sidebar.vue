<template>
    <div class="sidebar">
        <form class="sidebar__form form">
            <div class="form-list">
                <FormSlider :sliderOptions="FILTER_OPTIONS.priceOption" :areDefaultSidebarVisible="true" @select="priceSliderValue" :resetAllFilter="resetAllFilter" />
                <CheckboxGroup :sidebarOptions="FILTER_OPTIONS.typeOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <CheckboxGroup :sidebarOptions="FILTER_OPTIONS.wearOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <CheckboxGroup :sidebarOptions="FILTER_OPTIONS.holdOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <FormSlider :sliderOptions="FILTER_OPTIONS.floatOption" @select="floatSliderValue" :resetAllFilter="resetAllFilter"/>
                <CheckboxGroup :sidebarOptions="FILTER_OPTIONS.otherOption" :areDefaultSidebarVisible="true" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
            </div>
        </form>
        <button class="form__reset" @click="resetFilters">Сбросить фильтры</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckboxGroup from "../CheckboxGroup.vue";
import FormSlider from "../FormSlider.vue";
import { mapActions, mapGetters } from 'vuex';
import {ISelectOption} from "@/src/Models/selectOption";
import {ISlider} from "@/src/Models/slider";

export default defineComponent({
    name: 'sidebar',
    components: {
        CheckboxGroup,
        FormSlider
    },
    data() {
        return {
            resetAllFilter: false,
        }
    },
    computed: {
      ...mapGetters([
        "FILTER_OPTIONS",
      ])
    },
    methods: {
      ...mapActions([
        "GET_OPTIONS_FROM_API",
        "GET_SELECTED_FILTER_TO_VUEX",
        "GET_PRICE_SLIDER_VALUE_TO_VUEX",
        "GET_FLOAT_SLIDER_VALUE_TO_VUEX",
        "SET_PAGE_TO_VUEX",
        "RESET_ALL_FILTERS"
      ]),
        optionsSelect(option: ISelectOption) {
            this.GET_SELECTED_FILTER_TO_VUEX(option)
            this.$router.push(`/market`)
            this.SET_PAGE_TO_VUEX("1")
        },

        priceSliderValue(option: ISlider) {
            this.GET_PRICE_SLIDER_VALUE_TO_VUEX(option)
        },
        floatSliderValue(option: ISlider) {
            this.GET_FLOAT_SLIDER_VALUE_TO_VUEX(option)
        },
        resetFilters() {
            this.resetAllFilter = true
            this.RESET_ALL_FILTERS()
            // TODO ПЕРЕДАВАТЬ КОЛБЕК ФУНКЦИЮ В ПРОПСЫ А НЕ ПЕРЕМЕННУЮ
            setTimeout(() => {this.resetAllFilter = false}, 1000);
        },
    },
  mounted() {
    this.GET_OPTIONS_FROM_API()
  }
})
</script>

<style lang="scss">
.sidebar {
    padding: 5px 20px 25px 0;
}
.form__reset {
    margin-top: 20px;
    height: 36px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--white-color);
    text-align: center;
    line-height: 36px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--main-color);
    cursor: pointer;
    opacity: .5;
    transition: 0.6s linear;
    box-sizing: border-box;
    background-color: transparent;
    &:hover {
        opacity: 1;
    }
}
</style>