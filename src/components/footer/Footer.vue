<template>
    <footer class="footer">
        <div class="container">
            <logo class="footer__logo"/>
            <div class="footer__social">
                <a href="#" class="fa fa-vk link" target="_blank"></a>
                <a href="#" class="fa fa-telegram link" target="_blank"></a>
            </div>
            <div class="footer__info">
                <div class="info__text">
                    Надежный сервис для продаж скинов Steam с быстрыми выплатами
                </div>
                <div class="footer__links">
                    <div class="footer__list">
                        <a class="footer__item link link" href="#">Блог</a>
                        <a class="footer__item link" href="#">Купить скины</a>
                        <a class="footer__item link" href="#">Гарантии</a>
                        <a class="footer__item link" href="#">Контакты</a>
                        <a class="footer__item link" href="#">FAQ</a>
                        <a class="footer__item link" href="#">Как это работает</a>
                        <a class="footer__item link" href="#">Оферта</a>
                        <a class="footer__item link" href="#">Отзывы о нас</a>
                        <a class="footer__item link" href="#">Правила использования</a>
                        <a class="footer__item link" href="#">Политика конфиденциальности</a>
                        <a class="footer__item link" href="#">Продать вещи Steam</a>
                        <a class="footer__item link" href="#">Продать скины КС ГО</a>
                        <a class="footer__item link" href="#">Как продать все вещи в Стиме сразу</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import logo from '../logo.vue';

export default {
    name: 'Footer',
    components: {
        logo
    }
}
</script>

<style lang="scss">
//ты не используешь возможности sass, добавь хотя бы вложенность внутри своих файлов
.footer {
    padding-top: 40px;
    height: 230px;
    
}
.footer__logo{
    text-align: center;
}
.footer__list {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
}
.footer__item {
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
}
.footer__social {
    text-align: center;
}
.info__text {
    font-size: 12px;
    text-align: center;
    line-height: 17px;
    padding-top: 5px;
    padding-bottom: 20px;
}
</style>