<template>
  <v-toolbar
    fixed
    color="secondary"
    app
    clipped-left
    class="main-toolbar elevation-0"
    :scroll-off-screen="$breakpoint.is('xsOnly')"
    :scroll-threshold="150"
    :extended="!isMobile"
    extension-height="50px"
    :height="isMobile ? '48px' : '20px'"
  >
    <v-layout v-if="!isMobile" class="main-toolbar__top-row" column px-0>
      <v-system-bar status color="secondary">
        <v-container py-0>
          <v-layout>
            <v-spacer v-if="!isMobile"></v-spacer>
            <admin-menu></admin-menu>
            <!--<a :href="adminUrl" target="_blank">
              <button class="main-toolbar__log-in primary&#45;&#45;text" v-ripple>
                <v-icon color="primary">
                  input
                </v-icon> Службовий вхід
              </button>
            </a>-->
            <v-spacer v-if="isMobile"></v-spacer>
          </v-layout>
        </v-container>
      </v-system-bar>
    </v-layout>
    <v-layout
      :slot="isMobile ? 'default' : 'extension'"
      class="main-toolbar__extension"
      wrap
    >
      <v-container py-0>
        <v-layout justify-space-between align-end>
          <v-toolbar-side-icon
            v-if="isMobile"
            class="main-toolbar__menu-icon primary--text mb-2"
            @click="toggleSideBar"
          ></v-toolbar-side-icon>
          <nuxt-link to="/">
            <h1 class="main-toolbar__logo">
              ТРИ БОГАТИРІ
            </h1>
          </nuxt-link>
          <nav-bar
            class="main-toolbar__nav-bar"
            :tabs="tabsData"
            :slider-height="4"
            v-if="!isMobile"
            @navigate="goTo"
            :value="menuPosition"
          ></nav-bar>
        </v-layout>
      </v-container>
    </v-layout>
    <v-progress-linear v-if="stateLoader" class="main-toolbar__loader my-0" height="4" color="loader" indeterminate></v-progress-linear>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '~/components/shared/ANavBar';
import config from '~/utils/configs/mainMenu.js';
import api from '~/utils/api'
import AdminMenu from '../admin/AdminMenu'
export default {
  name: 'AHeader',
  components: { AdminMenu, NavBar },
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      adminUrl: api.adminUrl
    }
  },
  methods: {
    toggleSideBar() {
      this.$emit('input', !this.value)
    },
    goTo(link) {
      this.$router.push(link)
    },
  },
  computed: {
    ...mapGetters({
      stateLoader: 'getLoader'
    }),
    isMobile() {
      return this.$breakpoint.is('smAndDown')
    },
    menuPosition() {
      const routeName = this.$route.name ? this.$route.name.split('___')[0].split('-')[0] : 'index'
      return this.tabsData.findIndex(item => item.link.name === routeName)
    },
    tabsData() {
      return config({ isLogIn: this.isLogin, section: this.menuSection }).reduce((acc, item) => {
        if (item.show) { acc.push({ text: item.title, link: item.to }) }
        return acc
      }, [])
    },
    isLogin() {
      return false
    },
    menuSection() {
      return 'public'
    }
  }
}
</script>

<style lang="scss">
  .main-toolbar {
    border-bottom: 4px solid $c--secondary-dark !important;
    z-index: 100;
    &-menu-icon{
      top: 10px;
      margin-top: 20px;
    }

    &__logo {
      width: 200px;
      margin-left: 40px;
      margin-bottom: 10px;
      &--mobile{
        margin-bottom: -5px;
      }
    }

    &__logo--small{
      width: 150px;
      margin-top: 20px;
    }
    &__nav-bar{
      margin-top: 10px;
    }
    &__notice-link{
      color: white;
      &:hover{
        color: $c--error-color;
        text-decoration: underline;
      }
    }
    .v-toolbar__extension{
      padding-left: 0;
      padding-right: 0;
    }
    .v-toolbar__content{
      padding-left: 0;
      padding-right: 0;
    }
    &__loader{
      position: absolute;
      bottom: -4px;
    }
  }
</style>
