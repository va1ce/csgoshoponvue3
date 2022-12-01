<template>
    <div class="avatar">
        <a href="#"><img src="../../assets/images/avatar.jpg" class="avatar__img link" alt="avatar"></a>
    </div>
</template>

<script>
export default {
    name:'avatar'
}
</script>

<style lang="scss">
.avatar__img {
    border-radius: 33px;
    border: 2px solid transparent;
    transition: 0.3s;
    width: 55px;
    aspect-ratio: auto 55 / 55;
    height: 55px;
    &:hover {
        border: 2px solid var(--main-color); /* Ширина, вид и цвет рамки */
    }
}
</style>