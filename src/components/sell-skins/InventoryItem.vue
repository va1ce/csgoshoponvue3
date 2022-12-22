<template>
    <div class="inventory-item"
         :class="{ 'inventory-item-on-sale': onSale }"
         @click="addInSell(item_data)"
    >
        <img :src="require('../../assets/images/skins/' + item_data.image)" alt="item" class="inventory-item__img">
        <div class="inventory-item__price" >{{ item_data.price }} ₽</div>
        <div class="inventory-item__name">{{ item_data.name }}</div>
    </div>
</template>
<script lang="ts">
import {IShopItems} from "@/src/Models/shopItem";
import { mapGetters, mapActions } from 'vuex';
import { PropType , defineComponent } from "vue";
export default defineComponent ({
    name: "InventoryItem",
    data() {
        return {
            onSale: false as boolean,
        }
    },
    props: {
        item_data: {
            type: Object as PropType<IShopItems>,
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
        addInSell(data: IShopItems) {
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
})
</script>
<style lang="scss">
.inventory-item {
    background: var(--blue-color);
    position: relative;
    height: 140px;
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

    &-on-sale {
      border: 1px solid var(--main-color);
      background-color: var(--second-color);
      color: var(--white-color);
    }

    &__price {
      text-align: center;
    }

    &__img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      pointer-events: none;
    }

    &__name {
      padding: 3px;
      font-size: 11px;
      font-weight: 600;
      text-align: center;
    }
}

</style>