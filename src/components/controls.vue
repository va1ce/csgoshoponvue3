<template>
    <div class="controls">
        <div class="controls__left">
            <button class="controls__reload">
                <i class="fa fa-refresh"></i>
            </button>
            <div class="controls__search">
                <input type="text" placeholder="Поиск по скинам" class="controls__input">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div class="controls__right">
            <select class="controls__sort">
                <option value="Выбор">Популярность</option>
            </select>
            <marketCart/>
        </div>
    </div>
</template>

<script>
import marketCart from './market-cart.vue';
export default {
    name: 'controls',
    components:{
        marketCart
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
        grid-template-columns: 58px 110px auto;
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
    &__search {
        position: relative;
    }
    &__input {
        background: var(--white-color);
        border: none;
        height: 38px;
        box-sizing: border-box;
        outline: 0;
        padding-left: 35px;
        padding-right: 30px;
        border-radius: 5px;
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