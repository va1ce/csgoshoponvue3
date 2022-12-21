<template>
    <div class="skins-collection">
        <Cart/>
        <Controls/>
        <SkinsList/>
    </div>
</template>

<script>
import Controls from './Controls.vue';
import SkinsList from './SkinsList.vue';
import Cart from './cart/Cart.vue';

export default {
    name: 'SkinsCollection',
    components: {
        Cart,
        Controls,
        SkinsList,
    }
}
</script>