<template>
    <div class="sort-by-price" @click="changeSort(sortType)">
        <span>Цена</span>
        <i class="fa-solid fa-chevron-down" :style="sortType == 'ask'? 'opacity: 1' : 'opacity: .5'"></i>
        <i class="fa-solid fa-chevron-up" :style="sortType == 'desk'? 'opacity: 1' : 'opacity: .5'"></i>
    </div>
</template>
<script>
export default {
    name: "sort-by-price",
    data() {
        return {
            sortType:'desk'
        }
    },
    methods: {
        changeSort(value) {
            if (value == "ask") {
                this.sortType = 'desk'
            }
            else {
                this.sortType = 'ask'
            }
            this.$emit('changeSort',this.sortType)
        }
    }
}
</script>
<style lang="scss">
.sort-by-price {
    display: flex;
    gap: 5px;
    cursor: pointer;
}
.fa-chevron-down {
    opacity: .5;
} 
</style>