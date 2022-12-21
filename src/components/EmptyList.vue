<template>
  <div class="empty-list">
    <h3 class="empty-list__title">Ничего не найдено</h3>
    <h4 class="empty-list__description">Измените фильтры или сбростье их</h4>
  </div>
</template>

<script>
export default {
  name: 'EmptyList'
}
</script>

<style lang="scss">
.empty-list {
  width: 100%;
  text-align: center;
  padding: 150px;
  box-sizing: border-box;
  &__description {
    opacity: 0.5;
  }
}
</style>