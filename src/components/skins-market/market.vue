<template>
  <router-view></router-view>
  <Navigation/>
  <Header/>
  <SkinsMarket/>
  <Footer/>
</template>
  
<script>
import Navigation from '../navigation/Navigation.vue';
import Header from '../header/Header.vue';
import SkinsMarket from './SkinsMarket.vue';
import Footer from '../footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Header,
    SkinsMarket,
    Footer,
  }
}
</script>
