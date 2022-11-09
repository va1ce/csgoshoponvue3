<template>
<header class="header">
        <div class="container">
            <div class="header__row">
                <div class="header__text">
                    <h1 class="header__title">Покупай скины</h1>
                    <h2 class="header__subtitle">мгновенно!</h2>
                    <span class="header__info">Мгновенно обменивай реальные деньги  и получай крутые скины без задержек!</span>
                </div>
                <div class="header__img">
                    <img class="header__image-ct" src="../assets/images/head.png" alt="csgo-shop">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Headersvue',
}
</script>

<style lang="scss">
.header__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 333px;
}
.header__title {
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.4rem;
}
.header__subtitle {
    font-size: 3rem;
    line-height: 0;
    font-weight: 300;
}
.header__info {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 24px;
    padding-bottom: 24px;
}

</style>