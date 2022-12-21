<template>
    <ul class="navigation-list">
        <li class="navigation-list__item">
          <router-link
              :to="'/'"
              active-class="navigation-list__link--active"
              class="navigation-list__link link"
          >
            продать
          </router-link>
        </li>
        <li class="navigation-list__item">
          <router-link
              :to="'/market'"
              active-class="navigation-list__link--active"
              class="navigation-list__link link"
          >
            купить
          </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'NavigationList',
}

</script>

<style lang="scss">
.navigation-list {
    display: flex;
    padding-inline-start: 0;

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