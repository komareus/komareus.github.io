<template>
  <v-app class="white" id="app-container">
    <a-header
      v-model="drawer"
    ></a-header>
    <a-side-bar
      v-if="$breakpoint.is('smAndDown')"
      v-model="drawer"
    ></a-side-bar>
    <v-content class="default-layout__main-content pb-3">
      <v-layout wrap px-0 pt-0>
        <nuxt />
      </v-layout>
    </v-content>
    <!-- <a-footer></a-footer>-->
    <!--<pop-up
      action-type="Actions"
      type="ErrorData"
      :dialog-data="dialogData"
      v-model="dialogShow"
      @close="dialogShow = false"
    ></pop-up>-->
  </v-app>
</template>

<script>
// import AHeader from '~/components/default-layout/AHeader'
// import AFooter from '~/components/default-layout/AFooter'
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

    // AFooter
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
    }
  }
}
</script>

<style lang="scss">
  .default-layout{
    &__container {
      /*background-color: rgba(255,255,255, .8);*/
      min-height: 1500px;
    }
  }
</style>
