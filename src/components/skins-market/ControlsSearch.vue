<template >
    <div class="controls__search">
        <input type="text" placeholder="Поиск по скинам" class="controls__input" v-model="searchValue" >
        <i class="fa fa-search"></i>
    </div>
</template>

<script>
export default {
    name: "ControlsSearch",
    data() {
        return {
            searchValue: ""
        }
    },
    watch: {
        searchValue() {
            this.$emit('searchValue',this.searchValue)
            return this.searchValue
        }
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
    border-radius: 5px;
}
</style>