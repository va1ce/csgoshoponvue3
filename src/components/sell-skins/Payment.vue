<template >
    <div class="payment" :class="{ 'payment--blocked': !ITEMS_FOR_SALE.length }">
        <div class="payment__title">Выберите платежную систему</div>
        <div class="payment-methods">
            <SelectPayment
                v-for="select in selectOptions"
                :selectOptions="select"
                @selectMethods="changeSelect"
                :selected="selectMethods"/>
        </div>
        <div class="payment__title">Введите платежные реквизиты</div>
        <div class="payment-form">
            <Input
              class="payment-form__input"
              :type="inputType"
              :name="'payment-form__input'"
              :id="'payment-form__input'"
              :placeholder="changeImputPH"
              :disabled="disableForm"
              v-model="inputValue"
            />
            <div v-if="v$.inputValue.$error" class="trade-url-errror">
                Неправильно введены платежные данные
            </div>
            <Payout />
            <div class="privacy">
                Нажав кнопку ниже, Вы соглашаетесь с политикой конфиденциальности и правилами использования
            </div>
            <div class="payment-form__button">
                <buttonVue label="получить деньги" :disabled="(v$.inputValue.$error || inputValue === '')" class="payment-form__btn"/>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import Input from '../Input.vue';
import Payout from './Payout.vue';
import buttonVue from '../FormButton.vue';
import SelectPayment from './SelectPayment.vue'
import { mapGetters} from 'vuex';
import useVuelidate from '@vuelidate/core';
import {required, minLength, maxLength} from '@vuelidate/validators'
import { defineComponent } from "vue";

export default defineComponent({
    name: "Payment",
    data() {
        return {
            v$: useVuelidate(),
            inputValue: "",
            inputType:"text",
            selectMethods: "",
            selectOptions: [
                {src:"qiwi.svg", type:"qiwi"},
                {src:"visa.svg", type:"visa"},
                {src:"tether_trc20.svg", type:"tether_trc20"},
                {src:"bitcoin.svg", type:"bitcoin"},
            ],
        }
    },
    validations() {
        if (this.selectMethods === 'qiwi') {
            return {
                inputValue : {
                    minLength:minLength(11),
                    maxLength:maxLength(11),
                    required,
                }
            }   
        }
        if (this.selectMethods === 'visa') {
            return {
                inputValue : {
                    minLength:minLength(16),
                    maxLength:maxLength(16),
                    required,
                }
            }   
        }
      if (this.selectMethods === 'tether_trc20' || this.selectMethods === 'bitcoin') {
        return {
          inputValue : {
            minLength:minLength(34),
            maxLength:maxLength(34),
            required,
          }
        }
      }
      if (this.selectMethods === '') {
        return {
          inputValue : {
            required,
          }
        }
      }

    },
    components: {
        Input,
        Payout,
        buttonVue,
        SelectPayment
    },
    computed: {
        ...mapGetters(['ITEMS_FOR_SALE']),
        disableForm(): boolean {
            return !this.ITEMS_FOR_SALE.length;
        },
        changeImputPH(): string {
            if (this.selectMethods === 'qiwi') {
                this.inputType = "number"
                return 'Ваш QIWI кошелек'
            }
            if (this.selectMethods === 'visa') {
                this.inputType = "number"
                return 'Ваш номер карты'
            }
            if (this.selectMethods === 'tether_trc20') {
                this.inputType = "text"
                return 'tether TRC-20 кошелек'
            }
            if (this.selectMethods === 'bitcoin') {
                this.inputType = "text"
                return 'Ваш bitcoin кошелек'
            }
            return 'Ваш номер карты'
        }
    },
    methods: {
        changeSelect(value: string) {
            this.selectMethods = value
        }
    },
    watch: {
        inputValue() {
            this.v$.$touch();
        },
    }
})
</script>

<style lang="scss">
.payment--blocked {
  opacity: .7;
  pointer-events: none;
}

.payment-methods {
    padding-top: 10px;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(auto-fill,minmax(110px,1fr));
}

.payment-form {
    padding-top: 10px;

    &__input {
      padding-left: 10px;
      width: 98%;
    }

    &__commission {
      padding-top: 20px;
    }

    &__button {
      padding-top: 35px;
      text-align: center;
    }

    &__btn {
      width: 185px;
    }

    &-total__summ-name {
      font-size: 16px;
    }
}

.privacy {
    padding-top: 10px;
    line-height: 1.1;
    color: #4f5560;
    font-size: 11px;
    white-space: normal;
}
</style>