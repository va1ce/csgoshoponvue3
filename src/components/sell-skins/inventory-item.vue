<template>
<!--  для верхнего ряда на главной тултип с именем товара скрывается (из-за скролла),-->
<!--  я бы вообще сразу название товара показывал,-->
<!--  это удобнее по UX, чем это по хаверу делать-->
    <div class="inventory-item" :class="{ 'inventory-item-on-sale': onSale }" @mouseenter="show = true"
        @mouseout="show = false" @click="addInSell(item_data)">
        <img :src="require('../../assets/images/skins/' + item_data.image)" alt="item" class="inventory-item__img">
        <div class="inventory-item__price" @mouseenter="show = true">{{ item_data.price }} ₽</div>
        <div class="tooltip" v-if="show">
            {{ item_data.name + ' ' + item_data.wear }}
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "inventory-item",
    data() {
        return {
            show: false,
            onSale: false,
        }
    },
    props: {
        item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        ...mapActions([
            "ADD_TO_ITEMS_FOR_SALE",
            "DELETE_FROM_ITEMS_FOR_SALE"
        ]),
        addInSell(data) {
            if (!this.onSale) {
                this.onSale = true
                this.ADD_TO_ITEMS_FOR_SALE(data)
            }
            else {
                this.onSale = false
                this.DELETE_FROM_ITEMS_FOR_SALE(data.id)
            }
        }
    }
}
</script>
<style lang="scss">
.tooltip {
    padding: 3px;
    position: absolute;
    font-size: 11px;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid var(--main-color);
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translate(-50%, -0.5em);
    width: 120px;
    background-color: var(--white-color);
}

.inventory-item {
    background: var(--blue-color);
    position: relative;
    height: 100px;
    display: inline-block;
    color: var(--main-color);
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all .2s;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid var(--main-color);
    }
}

.inventory-item-on-sale {
    border: 1px solid var(--main-color);
    background-color: var(--second-color);
    color: var(--white-color);
}

.inventory-item__price {
    text-align: center;
}

.inventory-item__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    pointer-events: none;
}
</style>