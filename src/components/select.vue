<template>
    <div class="select">
        <p class="select__header" 
        @click="areOptionsVisible = !areOptionsVisible"
        :style="selected.name != 'Популярность'? 'opacity: 1' : ''">
            <i 
            v-if="selected.icons" 
            :class="selected.icons"
            >
            </i>
            {{ selected.name }}
        </p>
        <div 
        v-if="areOptionsVisible" 
        class="select-menu">
            <p 
            v-for="option in options" 
            :key="option.value" 
            @click="selectOption(option)" 
            class="select-menu__item"
            :class="{'select-menu__item-active': option.value == selected.value}"
            >
                <i 
                v-if="option.icons" 
                :class="option.icons">
                </i>
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectVue',
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false
        },
        hideSelect() {
            this.areOptionsVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)
    },

}
</script>

<style lang="scss">
.select {
    margin-right: 50px;
    position: relative;
}

.select__header {
    cursor: pointer;
    font-weight: 600;
    opacity: 0.5;
    padding-top: 7px;
    border: none;
    color: var(--main-color);
    &:hover {
        opacity: 1;
    }

}
.select-menu {
    position: absolute;
    padding: 10px;
    box-shadow: 0 13px 49px 0 rgb(18 19 20 / 59%);
    border-radius: 5px;
    z-index: 11;
    background: var(--white-color);
    cursor: pointer;
}

.select-menu__item {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
    padding: 6px 0px;
    opacity: 0.5;
    &-active {
        opacity: 1;
    }
    &:hover {
        opacity: 1;
    }
}
</style>