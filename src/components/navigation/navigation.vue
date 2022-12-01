<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__row">
                <Slide noOverlay>
                    <login/>
                    <router-link :to="'/'" active-class="navigation-list__link--active"  class="navigation-list__link link">продать</router-link>
                    <router-link :to="'/market'" active-class="navigation-list__link--active"  class="navigation-list__link link">купить</router-link>
                    <a class="navigation-list__link link" href="#">faq</a>
                    <a class="navigation-list__link link" href="#">отзывы</a>
                    <a class="navigation-list__link link" href="#">бонусы</a>
                    <a class="navigation-list__link link" href="#">пополнение</a>
                    <a class="navigation-list__link link" href="#">вывод</a>
                </Slide>
                <logo/>
                <navigationList/>
                <login/>
            </div>
        </div>

    </nav>
</template>

<script>
import logo from '../logo.vue';
import navigationList from './navigation-list.vue';
import login from './login.vue';
import { Slide } from 'vue3-burger-menu';
export default {
    name : 'Nav',
    components: {
        logo,
        navigationList,
        login,
        Slide
    },
}
</script>

<style lang="scss">
.bm-burger-button {
    display: none;
    top: 60px;
}
</style>