<template>
    <div class="cart-item">
        <img :src="require('../assets/images/skins/' + cart_item_data.image)" alt="item" class="cart-item__img">
        <div class="cart-item-info"> 
            <div class="cart-item__name">{{ cart_item_data.name }}</div>
            <div v-if="cart_item_data.float" class="cart-item__float">{{cart_item_data.float}}</div>
        </div>
        <div class="cart-item__price">{{ cart_item_data.price }}</div>
        <button class="cart-item__remove-btn" @click="deleteFromCart"><i class="fa-regular fa-trash-can"></i></button>
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
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    
}
</script>

<style lang="scss">
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.6s linear;
    &:hover {
        background-color: var(--blue-color);
    }
}
.cart-item__float {
    font-size: 12px;
    font-weight: 300;
}
.cart-item__img {
    width: 120px;
}
.cart-item__remove-btn {
    cursor: pointer;
    padding-right: 10px;
}
</style>