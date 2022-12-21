<template>
    <footer class="footer">
        <div class="container">
            <Logo class="footer__logo"/>
            <div class="footer__social">
                <a href="#" class="fa fa-vk link" target="_blank"></a>
                <a href="#" class="fa fa-telegram link" target="_blank"></a>
            </div>
            <div class="footer__info">
                <div class="info__text">
                    Надежный сервис для продаж скинов Steam с быстрыми выплатами
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../Logo.vue';

export default {
    name: 'Footer',
    components: {
        Logo
    }
}
</script>

<style lang="scss">
.footer {
    padding-top: 40px;
    height: 230px;

    &__logo {
      text-align: center;
    }
    &__social {
      text-align: center;
    }
}
.info__text {
    font-size: 12px;
    text-align: center;
    line-height: 17px;
    padding-top: 5px;
    padding-bottom: 20px;
}
</style>