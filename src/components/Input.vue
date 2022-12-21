<template>
    <input 
    :type="type" 
    :name="name" 
    :id="name" 
    class="input" 
    :placeholder="placeholder" 
    :value="modelValue"
    :disabled="disabled"
    @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
<script>
export default {
    emits: ["update:modelValue"],
    name: "Input",
    props: {
        error: {
            type: Array,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '300px'
        },
        modelValue:{
            type: [String,Number],
            default:''
        },
        disabled: {
            type: Boolean,
            default: false
        }

    }
}
</script>
<style lang="scss">
.input {
    background: var(--blue-color);
    border: none;
    height: 38px;
    box-sizing: border-box;
    outline: 0;
    padding-right: 30px;
    border-radius: 5px;
}
</style>