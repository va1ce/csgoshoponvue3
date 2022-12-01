<template >
    <div class="trade-url">
        <div class="name">
            Вставьте свою <a href="#">ссылку</a>
            на обмен </div>
        <div class="trade-url-input">
            <inputVue
            class="trade-url-field"
            :type="'text'"
            :name="'trade-url-field'"
            :id="'trade-url-field'"
            :placeholder="'https://steamcommunity.com/tradeoffer/new/?partner=....'"
            v-model="tradeUrl"
            
            />
            <buttonVue class="trade-url-input__button button" label="Сохранить" :disabled="v$.tradeUrl.$error" @clickOnButton="clickOnButton"/>
        </div>
        <div v-if="v$.tradeUrl.$error" class="trade-url-errror">
            Неправильно введена ссылка
        </div>
    </div>
</template>
<script>
import inputVue from '../input.vue';
import buttonVue from '../button.vue';
import useVuelidate from '@vuelidate/core';
import {required} from '@vuelidate/validators'
const mustBeTradeLink = (value) => value.includes('https://steamcommunity.com/tradeoffer/new/?partner=')
export default {
    name: "trade-url",
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
        buttonVue
    },
    methods: {
        clickOnButton() {
            this.v$.$touch();
        }
    }
}
</script>
<style lang="scss">
.trade-url-input {
    padding-top: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.trade-url-field {
    background: var(--blue-color);
    padding-left: 10px;
    max-width: 455px;
    width: calc(100% - 155px);
}

.trade-url-input__button {
    width: 110px;
}
</style>