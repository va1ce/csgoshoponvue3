<template>
    <div class="login">
        <balance/>
        <avatar/>
    </div>
</template>

<script>
import balance from './balance.vue';
import avatar from './avatar.vue';

export default {
  // это не логин, а profile или account-menu
    name:'login',
    components: {
        avatar,
        balance,
    }
}
</script>

<style lang="scss">
.login {
    display: flex;
    text-align: right;
    justify-content:flex-end;
    align-items: center;
    margin: 10px;
    gap: 5px;
}
</style>