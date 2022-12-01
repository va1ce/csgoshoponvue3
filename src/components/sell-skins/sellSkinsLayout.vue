<template >
    <navigation/>
    <saleSkinsVue/>
    <Footer></Footer>
</template>
<script>
import saleSkinsVue from './sale-skins.vue';
import navigation from '../navigation/navigation.vue';
import Footer from '../footer/Footer.vue';
export default {
    name: "sellSkinsLayout",
    components: {
        navigation,
        saleSkinsVue,
        Footer,
    }
}
</script>
<style lang="">
    
</style>