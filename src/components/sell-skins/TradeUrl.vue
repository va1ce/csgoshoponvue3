<template >
    <div class="trade-url">
        <div class="name">
            Вставьте свою <a href="#">ссылку</a> на обмен
        </div>
        <div class="trade-url-input">
            <inputVue
              class="trade-url-field"
              :type="'text'"
              :name="'trade-url-field'"
              :id="'trade-url-field'"
              :placeholder="'https://steamcommunity.com/tradeoffer/new/?partner=....'"
              v-model="tradeUrl"
            
            />
            <FormButton
                class="trade-url-input__button button"
                label="Сохранить"
                :disabled="v$.tradeUrl.$error"
                @clickOnButton="clickOnButton"
            />
        </div>
        <div v-if="v$.tradeUrl.$error" class="trade-url-errror">
            Неправильно введена ссылка
        </div>
    </div>
</template>
<script lang="ts">

import inputVue from '../Input.vue';
import FormButton from '../FormButton.vue';
import useVuelidate from '@vuelidate/core';
import {required} from '@vuelidate/validators'
import { defineComponent } from 'vue';
const mustBeTradeLink = (value:string) => value.includes('https://steamcommunity.com/tradeoffer/new/?partner=')
export default defineComponent({
    name: "TradeUrl",
    data() {
        return {
            v$: useVuelidate(),
            tradeUrl:""
        }
    },
    validations() {
        return {
            tradeUrl: {
                mustBeTradeLink,required
            }
        }
    },
    components: {
        inputVue,
        FormButton
    },
    methods: {
        clickOnButton() {
            this.v$.$touch();
        }
    }
})
</script>
<style lang="scss">
.trade-url-input {
    padding-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    &--button {
      width: 110px;
    }
}

.trade-url-field {
    background: var(--blue-color);
    padding-left: 10px;
    max-width: 455px;
    width: calc(100% - 155px);
}
</style>