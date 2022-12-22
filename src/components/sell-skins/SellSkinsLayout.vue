<template >
    <Navigation/>
    <SaleSkinsVue/>
    <Footer/>
</template>
<script>
import SaleSkinsVue from './SaleSkins.vue';
import Navigation from '../navigation/Navigation.vue';
import Footer from '../footer/Footer.vue';
export default {
    name: "sellSkinsLayout",
    components: {
        Navigation,
        SaleSkinsVue,
        Footer,
    }
}
</script>
