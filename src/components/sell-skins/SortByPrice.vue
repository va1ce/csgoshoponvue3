<template>
    <div class="sort-by-price" @click="changeSort(sortType)">
        <span>Цена</span>
        <i class="fa-solid fa-chevron-down" :style="sortType === 'priceAsc'? 'opacity: 1' : 'opacity: .5'"></i>
        <i class="fa-solid fa-chevron-up" :style="sortType === 'priceDesc'? 'opacity: 1' : 'opacity: .5'"></i>
    </div>
</template>
<script>
export default {
    name: "SortByPrice",
    data() {
        return {
            sortType:'priceDesc'
        }
    },
    methods: {
        changeSort(value) {
            if (value === "priceAsc") {
                this.sortType = 'priceDesc'
            }
            else {
                this.sortType = 'priceAsc'
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