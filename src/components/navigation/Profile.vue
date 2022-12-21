<template>
    <div class="profile">
        <Balance/>
        <Avatar/>
    </div>
</template>

<script>
import Balance from './Balance.vue';
import Avatar from './Avatar.vue';

export default {
    name: 'Profile',
    components: {
        Avatar,
        Balance,
    }
}
</script>

<style lang="scss">
.profile {
    display: flex;
    align-items: center;
    margin: 10px;
    gap: 5px;
}
</style>