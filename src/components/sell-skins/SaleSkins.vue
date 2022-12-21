<template>
    <div class="sell-skins">
        <div class="container">
            <div class="sell-skins__inner">
                <div class="sell-skins__left-block">
                    <tradeUrl />
                    <inventoryControls />
                    <div class="sell-skins-list">
                        <InventoryItems />
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
import tradeUrl from './TradeUrl.vue'
import InventoryControls from './InventoryControls.vue';
import payment from './Payment.vue'
import InventoryItems from './InventoryItems.vue';
export default {
    name: 'SaleSkins',
    components: {
        tradeUrl,
        InventoryControls,
        payment,
        InventoryItems
    },
}
</script>
<style lang="scss">
.sell-skins__inner {
    box-shadow: 0 13px 49px 0 #848587;
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