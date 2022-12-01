<template >
    <div class="payment">
        <div class="payment__title">Выберите платежную систему</div>
        <div class="payment-methods">
            <selectPayment v-for="select in selectOptions" :selectOptions="select" @selectMethods="changeSelect" :selected="selectMethods"/>
        </div>
        <div class="payment__title">Введите платежные реквизиты</div>
        <div class="payment-form">
            <inputVue 
            class="payment-form__input" 
            :type="inputType" 
            :name="'payment-form__input'"
            :id="'payment-form__input'" 
            :placeholder="changeImputPH" 
            :disabled="disableForm"
            v-model="inputValue" />
            <div v-if="v$.inputValue.$error" class="trade-url-errror">
                Неправильно введены платежные данные
            </div>
            <payout />
            <div class="privacy">
                Нажав кнопку ниже, Вы соглашаетесь с политикой конфиденциальности и правилами использования
            </div>
            <div class="payment-form__button">
                <buttonVue label="получить деньги" :disabled="(v$.inputValue.$error || inputValue == '')" class="payment-form__btn"/>
            </div>
        </div>

    </div>
</template>
<script>
import inputVue from '../input.vue';
import payout from './payout.vue';
import buttonVue from '../button.vue';
import selectPayment from './selectPayment.vue'
import { mapGetters, mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core';
import {required, minLength, maxLength} from '@vuelidate/validators'
export default {
    name: "payment",
    data() {
        return {
            v$: useVuelidate(),
            inputValue: "",
            inputType:"text",
            selectMethods: "visa",
            selectOptions: [
                {src:"qiwi.svg", type:"qiwi"},
                {src:"visa.svg", type:"visa"},
                {src:"tether_trc20.svg", type:"tether_trc20"},
                {src:"bitcoin.svg", type:"bitcoin"},
            ],
        }
    },
    validations() {
        if (this.selectMethods == 'qiwi') {
            return {
                inputValue : {
                    minLength:minLength(11),
                    maxLength:maxLength(11),
                    required,
                }
            }   
        }
        if (this.selectMethods == 'visa') {
            return {
                inputValue : {
                    minLength:minLength(16),
                    maxLength:maxLength(16),
                    required,
                }
            }   
        }
    },
    components: {
        inputVue,
        payout,
        buttonVue,
        selectPayment
    },
    computed: {
        ...mapGetters(['ITEMS_FOR_SALE']),
        disableForm() {
            if (this.ITEMS_FOR_SALE.length) {
                return false
            }
            else {
                return true
            }
        },
        changeImputPH(){
            if (this.selectMethods == 'qiwi') {
                this.inputType = "number"
                return 'Ваш QIWI кошелек'
            }
            if (this.selectMethods == 'visa') {
                this.inputType = "number"
                return 'Ваш номер карты'
            }
            if (this.selectMethods == 'tether_trc20') {
                this.inputType = "text"
                return 'tether TRC-20 кошелек'
            }
            if (this.selectMethods == 'bitcoin') {
                this.inputType = "text"
                return 'Ваш bitcoin кошелек'
            }
            return 'Ваш номер карты'
        }
    },
    methods: {
        selectPayment() {
            this.selectMethods='qiwi'
        },
        changeSelect(value) {
            this.selectMethods = value
        }
    },
    watch: {
        inputValue() {
            this.v$.$touch();
        },
    }
}
</script>
<style lang="scss">
.payment-methods {
    padding-top: 10px;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: auto auto auto;
}

.payment-methods__item {
    margin-bottom: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 94%;
    cursor: pointer;
    background-color: var(--second-color);
    transition: .3s background-color, .3s border;
    &:hover {
        background-color: var(--main-color);
    }
}
.payment-methods__item--selected {
    background-color: var(--main-color);
}

.payment-methods__item-img {
    width: 80px;
}

.payment-form {
    padding-top: 10px;
}

.payment-form__input {
    padding-left: 10px;
    width: 98%;
}

.payment-form__commission {
    padding-top: 20px;
}

.payment-form-total__summ-name {
    font-size: 16px;
}
.privacy {
    padding-top: 10px;
    line-height: 1.1;
    color: #4f5560;
    font-size: 11px;
    white-space: normal;
}
.payment-form__button {
    padding-top: 35px;
    text-align: center;
}
.payment-form__btn {
    width: 185px;
}
@media (max-width:990px) {
    .payment-methods {
        grid-template-columns: auto auto;
    }
}
@media (max-width:905px){
    .payment-methods {
        grid-template-columns: auto auto auto;
    }
}
@media (max-width:425px){
    .payment-methods {
        grid-template-columns: auto auto;
    }
}
</style>