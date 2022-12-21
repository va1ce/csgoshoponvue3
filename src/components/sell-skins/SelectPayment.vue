<template>
    <div class="payment-methods__item"
         :class="{ 'payment-methods__item--selected': selectMethods === selected }"
         @click="selectPayment"
    >
        <img :src="require('../../assets/images/' + selectOptions.src)" alt="{{selectOptions.type}}" class="payment-methods__item-img">
    </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "SelectPayment",
    data() {
        return {
            selectMethods: this.selectOptions
        }
    },
    props: {
        selectOptions: {
            type: Object as PropType<{"src":string, "type": string}>,
            default() {
                return {}
            }
        },
        selected: {
            type: String,
            default:""
        },
    },
    methods: {
        selectPayment() {
            this.selectMethods = this.selectOptions.type
            this.$emit('selectMethods' , this.selectMethods)
        },
    }
})
</script>

<style lang="scss">
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

  &-img {
    width: 80px;
  }

  &--selected {
    background-color: var(--main-color);
  }
}
</style>