<template>
  <router-view></router-view>

<!--  вместо дублирования части компонентов, надо выносить их на более высокий уровень, например app или layout-->
  <navigation></navigation>
  <Headersvue />
  <skinsMarket />
  <Footer></Footer>
</template>
  
<script>
import navigation from './navigation/navigation.vue';
import Headersvue from './header/Headervue.vue';
import skinsMarket from './skins-market/skins-market.vue';
import Footer from './footer/Footer.vue';

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