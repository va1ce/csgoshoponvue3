<template>
    <button class="button" :disabled="disabled" @click="clickOnButton">{{label}}</button>
</template>
<script>
export default {
    name: "v-button",
    props: {
        label:{
            type: String,
            default:'Button'
        },
        disabled: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        clickOnButton() {
            this.$emit('clickOnButton')
        }
    }
}
</script>
<style lang="scss">
.button {
    background: var(--main-color);
    color: var(--white-color);
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
    &:disabled {
        background-color: #a840ff;
        opacity: .7;
        cursor: default;
    }
}
</style>