<template>
    <div class="cart-item">
        <div class="item__info">
            <div v-if="cart_item_data.float" class="item__skin-info">
                {{cart_item_data.float}}
            </div>
        </div>
        <img :src="require('../assets/images/skins/' + cart_item_data.image)" alt="item" class="item__img">
        <a href="#" class="">
            <div class="">{{ cart_item_data.name }}</div>
        </a>
        <div class="item__bottom">
            <div class="price">{{ cart_item_data.price }}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },  
    methods: {

    },
}
</script>

<style>
.cart-item {
    display: flex;
}
</style>