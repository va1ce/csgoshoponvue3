<template>
    <ul class="navigation-list">
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">продать</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link navigation-list__link--active link" href="#">купить</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">faq</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">отзывы</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">бонусы</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">пополнение</a></li>
        <li class="navigation-list__item"><a class="navigation-list__link link" href="#">вывод</a></li>
    </ul>
</template>

<script>
export default {
    name : 'navigation-list',

}

</script>

<style lang="scss">
.navigation-list {
    display: flex;
    padding-inline-start : 0;
    &--open {
        flex-direction: column;
        row-gap: 20px;
        font-size: 34px;
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        min-height: 100vh;
        background: #bfbfbf;
        border-radius: 10px;
    }
    &__item {
        margin-right: 24px;
        list-style-type: none;
    }
    &__link {
        padding: 8px;
        font-size: 14px;
        transition: 0.6s linear;
        &:hover {
            background: var(--background-color);
            border-radius: 10px;
        }
        &--active {
            font-weight: 1000;
            color: var(--white-color);
        }
    }
}
</style>