<template >
    <div class="form__item " :class="{ 'form__item--opened': areDefaultSidebarVisible }">
        <div class="form__title" @click="areDefaultSidebarVisible = !areDefaultSidebarVisible">{{ sidebarOptions.name }}</div>
        <transition name="fade">
            <div class="form__content form-content" v-if="areDefaultSidebarVisible ">
                <div class="checkbox" 
                v-for="option in sidebarOptions.checkboxes" >
                    <input 
                        type="checkbox" 
                        :id="option.id" 
                        :value="option.type" 
                        v-model="checkedNames"
                        @input="selectOption(option)"
                        class="checkbox__input"/>
                    <label 
                        :for="option.id" 
                        class="checkbox__label"
                        >{{ option.name }}
                    </label>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  // здесь всё отлично сделал
    name: 'checkboxGroup',
    data() {
        return {
            checkedNames: [],
        }
    },
    props: {
        sidebarOptions: {
            type: Object,
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
        selectOption(option) {
            this.$emit('select', option.type)
        },
    },
    watch: {
        resetAllFilter(){
            if (this.resetAllFilter) {
                this.checkedNames = []
            }
        },
    }
}
</script>
<style lang="scss">
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
.form__content {
    padding-bottom: 15px;
    border-bottom: 2px solid var(--main-color);
    margin-bottom: 10px;
    font-size: 13px;
}
.checkbox {
    padding-top: 5px;
    padding-bottom: 5px;
}
.checkbox__label {
    cursor: pointer;
    &:hover {
        color: var(--second-color);
    }
}
.checkbox__input {
    cursor: pointer;
    margin-right: 9px;
    vertical-align: top;
}
.fade-enter-active {
    transition: opacity .3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>