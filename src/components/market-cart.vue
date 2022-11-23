<template>
    <div class="market-cart">
        <span class="market-cart__sum">
            <span class="market-cart__value">0.00</span>
            <i class="fa fa-ruble"></i>
        </span>
        <i class="fa fa-shopping-cart"></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'market-cart',
    components : {
        
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        ...mapGetters(['CART'])
    }
}
</script>

<style>

</style>