<template>
    <div class="controls">
        <div class="controls__left">
            <button class="controls__reload">
                <i class="fa fa-refresh"></i>
            </button>
            <ControlsSearch @searchValue="searchSkins"/>
        </div>
        <div class="controls__right">
            <Select
            :options="SELECT_OPTIONS"
            @select="optionsSelect"
            :selected="selected"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Select from '../Select.vue';
import ControlsSearch from './ControlsSearch.vue';
import { mapActions, mapGetters } from 'vuex';
import {ISelectOption} from "@/src/Models/selectOption";

export default defineComponent({
    name: 'Controls',
    components:{
        Select,
        ControlsSearch,
    },
    data() {
        return {
            selected: {name: 'Популярность', icons:"", value: 1}
        }
    },
    computed: {
      ...mapGetters([
        "SELECT_OPTIONS",
      ])
    },
    methods: {
        ...mapActions([
            'GET_SEACRH_VALUE_TO_VUEX',
            'GET_SELECT_OPTIONS_FROM_API',
            'GET_SELECTED_OPTION_TO_VUEX',
            'SORT_ITEMS_BY_PRICE'
        ]),
        optionsSelect(option: ISelectOption) {
            this.selected = option
            this.GET_SELECTED_OPTION_TO_VUEX(option.type)
        },
        searchSkins(value: string) {
            this.GET_SEACRH_VALUE_TO_VUEX(value)
        }
    },
  mounted() {
      this.GET_SELECT_OPTIONS_FROM_API()
  }
})
</script>

<style lang="scss">
.controls {
    display: grid;
    grid-template-columns: 47% 53%;
    padding-bottom: 14px;
    padding-top: 14px;
    &__left {
        display: grid;
        grid-template-columns: 58px 110px;
        align-items: center;
    }
    &__right {
        display: flex;
        justify-content: end;
    }
    &__reload {
        font-size: 20px;
        padding-right: 15px;
        padding-left: 15px;
        color: var(--main-color);
        margin-top: 5px;
        opacity: .5;
        transition: 0.6s linear;
        &:hover {
            opacity: 1;
        }
    }
    &__sort {
        display: inline-block;
        padding-right: 10px;
        margin-right: 10px;
        font-weight: 600;
        opacity: 0.5;
        padding-top: 7px;
        border: none;
        color: var(--main-color);
        &:hover {
            opacity: 1;
        }
    }
}
.fa-search{
    padding: 5px;
    cursor: pointer;
    position: absolute;
    top: 12px;
    left: 12px;
    color: #c0c0c2;
    transition: 0.2s all;
    padding: 0;
    pointer-events: none;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
}
</style>