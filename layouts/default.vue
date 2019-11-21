<template>
  <v-app class="default-layout white" id="app-container">
    <a-header
      v-model="drawer"
    ></a-header>
    <a-side-bar
      v-if="$breakpoint.is('smAndDown')"
      v-model="drawer"
    ></a-side-bar>
    <div class="default-layout__background-img" :class="{ 'default-layout__background-img--home': isHome }"></div>
    <v-content class="default-layout__main-content pb-0 grey lighten-2">
      <v-container class="default-layout__container" wrap px pt-0>
        <nuxt />
      </v-container>
    </v-content>
    <a-footer></a-footer>
    <!--<pop-up
      action-type="Actions"
      type="ErrorData"
      :dialog-data="dialogData"
      v-model="dialogShow"
      @close="dialogShow = false"
    ></pop-up>-->
    <div id="netlify-modal"></div>
    <v-layout v-if="getLoader" justify-center align-center class="default-layout__loader">
      <v-progress-circular
        :size="120"
        :width="9"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-layout>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import AFooter from '~/components/default-layout/AFooter'
// import AEntrance from '~/components/default-layout/AEntrance'
import ASideBar from '~/components/default-layout/ASideBar'
import AHeader from '~/components/default-layout/AHeader'
// import PopUp from '~/components/shared/popup/PopUp'
export default {
  components: {
    AHeader,
    // PopUp,
    ASideBar,
    // AEntrance,
    AFooter
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
    }
  },
  computed: {
    ...mapGetters({
      getLoader: 'getLoader',
    }),
    isHome() {
      return this.$route.name === 'index';
    }
  }
}
</script>

<style lang="scss">
  .default-layout{
    &__loader{
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 100;
    }
    &__main-content{

    }
    &__container {
      height: 100%;
    }
    &__background-img{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-image: url(/img/home/paralax.jpg);
      background-size: cover;
      opacity: .1;
      &--home{
        opacity: .8;
      }
    }
  }
</style>
