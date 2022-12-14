<template>
    <div class="skins-list__item item">
        <div class="item__info">
            <div v-if="item_data.hold" class="item__skin-info">
                <i class="fa fa-lock"></i>
                {{ item_data.hold }}
            </div>
            <div v-if="item_data.wear" class="item__skin-info">
                {{ item_data.wear }}
            </div>
            <div v-if="item_data.float" class="item__skin-info">
                {{item_data.float}}
            </div>
        </div>
        <img :src="require('../../assets/images/skins/' + item_data.image)" alt="item" class="item__img">
        <a href="#" class="item__link link">
            <div class="item__name">{{ item_data.name }}</div>
        </a>
        <div class="item__bottom">
            <div class="price">{{ item_data.price }} ₽</div>
        </div>
        <div v-if="checkItemOnCard" class="item__in-cart-icon">
            <i class="fa-solid fa-cart-shopping fa-3x"></i>
        </div>
        <AddToCardButton
            @addToCart="addToCart"
            @removeFromCart="removeFromCart"
            :checkItemOnCard = "checkItemOnCard"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import AddToCardButton from '../AddToCardButton.vue';
import { mapGetters, mapActions } from 'vuex';
import {IShopItems} from "@/src/Models/shopItem";
export default defineComponent({
    name: 'SkinsListItem',
    components: {
        AddToCardButton
    },
    props: {
        item_data: {
            type: Object as PropType<IShopItems>,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            onCard:false
        }
    },
    computed: {
        ...mapGetters(['CART']),
        checkItemOnCard() {
            this.onCard = !!this.CART.includes(this.item_data);
            return this.onCard
        }
    },
    methods: {
        addToCart() {
            this.onCard = true
            this.$emit('addToCart', this.item_data);
        },
        removeFromCart() {
            this.onCard = false
            this.$emit('removeFromCart', this.item_data.id);
        },
    },
})
</script>

<style lang="scss">
.item {
    background: var(--white-color);
    position: relative;
    height: 220px;
    display: inline-block;
    color: var(--main-color);
    border-right: none;
    border-bottom: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.6s linear;
    &:hover {
        background-color: var(--blue-color);
        .item__to-cart {
            color: var(--white-color);
            background-color: var(--main-color);
        }
    }

  &__skin-info {
    &:after {
      content: ' / ';
      color: #b5b6b7;
    }
    &:last-child::after {
      content: "";
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-top: 8px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 12px;
    font-size: 12px;
  }

  &__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    pointer-events: none;
  }

  &__link {
    text-decoration: none;
    font-size: 12px;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 33px;
    z-index: 10;
    text-transform: none;
  }

  &__name {
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    z-index: 20;
    font-size: 13px;
    line-height: 13px;
    bottom: 20px;
    text-transform: none;
  }

  &__bottom {
    font-size: 13px;
    line-height: 18px;
    font-weight: 600;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 5px;
    position: absolute;
    bottom: 27px;
    left: 0;
    right: 0;
  }

  &__in-cart-icon {
    color: var(--second-color);
    top: 35%;
    left: 35%;
    position: absolute;
    transition: .2s all;
  }
}
</style>