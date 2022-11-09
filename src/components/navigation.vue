<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__row">
                <button class="nav__button">
                    <i class="fa-solid fa-bars fa-2x"></i>
                </button>
                <logo/>
                <navigationList/>
                <login/>
            </div>
        </div>

    </nav>
</template>

<script>
import logo from './logo.vue';
import navigationList from './navigation-list.vue';
import login from './login.vue';

export default {
    name : 'Nav',
    components: {
        logo,
        navigationList,
        login,
    }
}
</script>

<style>

</style>