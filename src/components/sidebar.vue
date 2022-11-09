<template>
    <div class="sidebar">
        <form class="sidebar__form form">
            <div class="form-list">
                <div class="form__item form__item--opened">
                    <div class="form__title">Цена</div>
                    <div class="form__content form-content">
                        <div class="content__fields fields">
                            <div class="field__item">
                                <i class="fa fa-rub"></i>
                                <input type="text" placeholder="0.00" class="field__price">
                            </div>
                            <div class="spacer">-</div>
                            <div class="field__item">
                                <i class="fa fa-rub"></i>
                                <input type="text" placeholder="∞" class="field__price">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form__item">
                    <div class="form__title">Тип</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Раритетность</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Износ</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Холд</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Float</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Фаза</div>
                </div>
                <div class="form__item">
                    <div class="form__title">Другое</div>
                </div>
            </div>
            <button class="form__reset">Сбросить фильтры</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
}
</script>

<style>

</style>