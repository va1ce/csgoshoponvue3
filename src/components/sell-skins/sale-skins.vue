<template>
    <div class="sell-skins">
        <div class="container">
            <div class="sell-skins__inner">
                <div class="sell-skins__left-block">
                    <tradeUrl />
                    <inventoryControls @changeSort="changeSort"/>
                    <div class="sell-skins-list">
                        <inventoryItems :priceSort="sortValue"/>
                    </div>
                </div>
                <div class="sell-skins__right-block">
                    <payment />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tradeUrl from './trade-url.vue'
import inventoryControls from './inventory-controls.vue';
import payment from './payment.vue'
import inventoryItems from './inventory-items.vue';
export default {
    data() {
        return {
          // должно быть в store как и поиск, не вижу смысла делать локальный стейт для одного из элементов поиска
            sortValue:"desk"
        }
    },
    components: {
        tradeUrl,
        inventoryControls,
        payment,
        inventoryItems
    },
    methods:{
        changeSort(value){
            this.sortValue = value
        }
    }
}
</script>
<style lang="scss">
.sell-skins__inner {
    box-shadow: 0 13px 49px 0 rgb(18 19 20 / 59%);
    display: grid;
    padding: 15px 10px 0 20px;
    min-height: 350px;
    border-radius: 4px;
    grid-template-columns: auto 355px;
    grid-column-gap: 16px;
    margin-top: 16px;
    padding-bottom: 64px;
    position: relative;
}
@media (max-width:905px){
    .sell-skins__inner {
        grid-template-columns: auto;
    }
    .sell-skins__right-block {
        padding-top: 20px;
    }
}
</style>