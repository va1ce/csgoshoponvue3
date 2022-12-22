<template>
    <div class="form__item" :class="{ 'form__item--opened': areDefaultSidebarVisible}">
        <div class="form__title" @click="areDefaultSidebarVisible = !areDefaultSidebarVisible">{{ sliderOptions.name }}</div>
        <transition name="fade">
            <div class="form__content form-content" v-if="areDefaultSidebarVisible">
                <div v-if="sliderOptions.name == 'Цена'" class="content__fields fields">
                    <div class="field__item">
                        <i class="fa fa-rub"></i>
                        <input type="number" placeholder="0.00" class="field__price" v-model="sliderValue.gte" @input="selectOption(sliderValue)">
                    </div>
                    <div class="spacer">-</div>
                    <div class="field__item">
                        <i class="fa fa-rub"></i>
                        <input type="number" placeholder="∞" class="field__price" v-model="sliderValue.lte" @input="selectOption(sliderValue)">
                    </div>
                </div>
                <div v-else class="content__fields fields">
                    <div class="field__item">
                        <input type="number" placeholder="0.0000" class="field__price" v-model="sliderValue.gte" @input="selectOption(sliderValue)">
                    </div>
                    <div class="spacer">-</div>
                    <div class="field__item">
                        <input type="number" placeholder="1.0000" class="field__price" v-model="sliderValue.lte" @input="selectOption(sliderValue)">
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ISlider} from "@/src/Models/slider";
export default defineComponent({
    name: 'FormSlider',
    data() {
        return {
            sliderValue: { gte: "", lte: "" },
        }
    },
    props: {
        sliderOptions: {
            type: Object as PropType<ISlider>,
            default() {
                return {}
            }
        },
        areDefaultSidebarVisible: {
            type: Boolean,
            default:false
        },
        resetAllFilter: {
            type: Boolean,
            default:false,
        }
    },
    methods: {
        selectOption(option:ISlider) {
            this.$emit('select', option)
        },
    },
    watch: {
        resetAllFilter(){
            if (this.resetAllFilter) {
                this.sliderValue.gte = ""
                this.sliderValue.lte = ""
            }
        },
    }
})
</script>

<style lang="scss" scoped>
.form__item {
    font-weight: 600;
    padding-bottom: 10px;
    padding-top: 5px;
    margin-bottom: 10px;
    display: block;
    position: relative;
    user-select: none; 
    &--opened {
        .form__title:after {
            content: '-';
            display: flex;
            position: absolute;
            right: 0;
            font-size: 18px;
            top: 3px;
        }
    }
}
.form__title {
    margin-bottom: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:after {
        content: '+';
        display: flex;
        position: absolute;
        right: 0;
        font-size: 18px;
        top: 3px;
    }
}
.content__fields {
    display: grid;
    grid-template-columns: auto 10px auto;
}
.field__item {
    margin-right: 5px;
}
.field__price {
    background: var(--white-color);
    border: none;
    height: 26px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
    padding-left: 23px;
    padding-right: 10px;
    border-radius: 5px;
}
.spacer {
    padding-top: 4px;
    text-align: center;
}
.fa-rub {
    position: absolute;
    font-size: 13px;
    opacity: 0.5;
    top: 40px;
    margin-left: 5px;
}
.fade-enter-active {
    transition: opacity .3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>