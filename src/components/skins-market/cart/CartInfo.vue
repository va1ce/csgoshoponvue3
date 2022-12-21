<template>
    <div class="cart-info">
        <div class="cart-info-summary">
            <div class="cart-info-summary-list">
                <div class="cart-info-summary-item">
                    <div class="cart-info-summary-item__title">Предметы</div>
                    <div class="cart-info-summary-item__value">{{ CART.length }}</div>
                </div>
                <div class="cart-info-summary-item summary-total">
                    <div class="cart-info-summary-item__title">Всего:</div>
                    <div class="cart-info-summary-item__value">{{ cartTotalCost }} ₽</div>
                </div>
            </div>
        </div>
        <FormButton
            class="cart-info__buy-btn"
            label="Купить"
            :disabled="CART.length === 0"
        />
        <button class="cart-info__clear-btn" @click="deleteAllCart">Очистить корзину</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import FormButton from "../../FormButton.vue";
export default defineComponent({
    name: 'CartInfo',
    components: {FormButton},
    computed: {
        ...mapGetters(['CART']),
        cartTotalCost(): number {
            let result = []
            if (this.CART.length) {
                for (let item of this.CART) {
                    result.push(item.price);
                }
                let k = result.reduce((acc, number) => parseFloat(acc) + parseFloat(number));
                k = parseFloat(k)
                return k.toFixed(2);
            } 
            else return 0;

        },
    },
    methods: {
        deleteAllCart(): void {
            this.$emit('deleteAllCart')
        },
    }
})
</script>

<style lang="scss">
.cart-info {
  padding-left: 20px;
}

.cart-info-summary {
  padding: 5px 15px 5px 15px;
}

.cart-info-summary-item {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding-bottom: 10px;
}

.cart-info__buy-btn {
  margin-top: 10px;
  background: var(--main-color);
  color: var(--white-color);
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background-color: #a840ff;
  }
}
.summary-total {
  text-transform: uppercase;
  padding-bottom: 0;
  font-size: 18px;
}

.cart-info__clear-btn {
  margin-top: 10px;
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--main-color);
  cursor: pointer;
  transition: all .2s cubic-bezier(.4, 0, .2, 1);
  opacity: .7;
  box-sizing: border-box;

  &:hover {
    opacity: 1;
  }
}
</style>