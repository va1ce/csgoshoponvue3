<template >
    <div class="controls__search">
        <input type="text" placeholder="Поиск по скинам" class="controls__input" v-model="searchValue" >
        <i class="fa fa-search"></i>
        {{searchH}}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "controls__search",
    data() {
        return {
            searchValue: ""
        }
    },
    computed: {
        ...mapGetters([
            'SEARCH_VALUE'
        ]),
        searchH() {
            this.GET_SEACRH_VALUE_TO_VUEX(this.searchValue)
            return this.searchValue
        }
    },
    methods: {
        ...mapActions([
            'GET_SEACRH_VALUE_TO_VUEX'
        ]),
        search(value) {
            this.GET_SEACRH_VALUE_TO_VUEX(value)
        },
    }
}
</script>

<style lang="scss">
.controls__search {
    position: relative;
    display: flex;
}
.controls__input {
    background: var(--white-color);
    border: none;
    height: 38px;
    box-sizing: border-box;
    outline: 0;
    padding-left: 35px;
    padding-right: 30px;
    border-radius: 5px;
}
</style>