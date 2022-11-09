<template>
    <div class="skins-list__item item">
        <div class="item__info">
            <div class="item__skin-info">
                <i class="fa fa-lock"></i>
                {{ item_data.hold }}
            </div>
            <div v-if="item_data.float" class="item__skin-info">
                {{item_data.float}}
            </div>
        </div>
        <img :src="require('../assets/images/skins/' + item_data.image)" alt="item" class="item__img">
        <a href="#" class="item__link link">
            <div class="item__name">{{ item_data.name }}</div>
        </a>
        <div class="item__bottom">
            <div class="price">{{ item_data.price }}</div>
        </div>
        <button class="item__to-cart" @click="sendDataToParent">
            <span><i class="fa fa-cart-plus"></i>В корзину</span>
        </button>
    </div>
</template>

<script>

export default {
    name: 'skins-list__item',
    props: {
        item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        sendDataToParent() {
            this.$emit('sendArticle', this.item_data.name)
        }
    },
}
</script>

<style>

</style>