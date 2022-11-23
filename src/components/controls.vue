<template>
    <div class="controls">
        <div class="controls__left">
            <button class="controls__reload">
                <i class="fa fa-refresh"></i>
            </button>
            <controls__search/>
        </div>
        <div class="controls__right">
            <selectVue 
            :options="options"
            @select="optionsSelect"
            :selected="selected"
            />
        </div>
    </div>
</template>

<script>
import marketCart from './market-cart.vue';
import selectVue from './select.vue';
import controls__search from './controls__search.vue';
export default {
    name: 'controls',
    components:{
        marketCart,
        selectVue,
        controls__search,
    },
    data() {
        return {
            options: [
                {name: 'Популярность', icons:"", value: 1},
                {name: 'Цена', icons:"fa-solid fa-arrow-up-short-wide", value: 2},
                {name: 'Цена', icons:"fa-solid fa-arrow-down-short-wide", value: 3},
                {name: 'Самые новые', value: 4},
                {name: 'Самые старые', value: 5},
                {name: 'Float', icons:"fa-solid fa-arrow-up-short-wide", value: 6},
                {name: 'Float', icons:"fa-solid fa-arrow-down-short-wide", value: 7},
            ],
            selected: {name: 'Популярность', icons:"", value: 1}
        }
    },
    methods: {
        optionsSelect(option) {
            this.selected.name = option.name
            this.selected.icons = option.icons
            this.selected.value = option.value
            this.$emit('selectedSort',this.selected)
        }
    }
}
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
        // background-color: var(--second-color);
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