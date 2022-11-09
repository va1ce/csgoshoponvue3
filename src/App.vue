<template>
  <navigation/>
  <Headersvue/>
  <skinsMarket/>
  <Footer></Footer>
</template>

<script>
import navigation from './components/navigation.vue';
import Headersvue from './components/Headervue.vue';
import skinsMarket from './components/skins-market.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    navigation,
    Headersvue,
    skinsMarket,
    Footer,
  }
}
</script>

<style lang="scss">

</style>
