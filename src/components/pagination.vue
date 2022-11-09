<template>
    <div class="pagination">
        <div class="pagination__list">
            <a class="pagination__link pagination__link--active link" href="#">1</a>
            <a class="pagination__link link" href="#">2</a>
            <a class="pagination__link link" href="#">3</a>
            <a class="pagination__link link" href="#">4</a>
            <a class="pagination__link link" href="#">5</a>
            <a class="pagination__link link" href="#">6</a>
            <a class="pagination__link link" href="#">7</a>
            <a class="pagination__link link" href="#">8</a>
            <a class="pagination__link link" href="#">9</a>
            <a class="pagination__link link" href="#">10</a>
            <a class="pagination__link link" href="#">след</a>
            <a class="pagination__link link" href="#">101</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pagination',
}
</script>

<style lang="scss">
.pagination__list {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
}
.pagination__link {
    padding: 10px;
    border-radius: 4px;
    transition: 0.6s linear;
    &--active {
        background: var(--main-color);
        color: var(--white-color);
    }
    &:hover {
        background: var(--main-color);
        color: var(--white-color);
    }
}
</style>