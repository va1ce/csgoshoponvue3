<template>
    <nav class="nav">
        <div class="container">
          <Slide noOverlay>
            <Profile/>
            <router-link :to="'/'" active-class="navigation-list__link--active"  class="navigation-list__link link">продать</router-link>
            <router-link :to="'/market'" active-class="navigation-list__link--active"  class="navigation-list__link link">купить</router-link>
          </Slide>
            <div class="nav__row">
                <Logo/>
                <NavigationList/>
                <Profile v-if="isDesktop"/>
            </div>
        </div>

    </nav>
</template>

<script>
import Logo from '../Logo.vue';
import NavigationList from './NavigationList.vue';
import { Slide } from 'vue3-burger-menu';
import Profile from "../navigation/Profile.vue";
export default {
    name : 'Nav',
    data() {
      return {
        isDesktop: true
      }
    },
    components: {
        Profile,
        Logo,
        NavigationList,
        Slide
    },
    mounted() {
      this.isDesktop = window.innerWidth > 850;
      window.addEventListener('resize', () => {
        this.isDesktop = window.innerWidth > 850;
      })
    }
}
</script>

<style lang="scss">
.bm-burger-button {
    display: none;
    top: 60px;
}
</style>