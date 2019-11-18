<template>
  <div class="header-nav">
    <v-tabs
      v-model="position"
      class="header-nav__tabs"
      app
      :hide-slider="disable"
    >
      <v-tabs-slider
        color="accent"
        lass="header-nav__slider"
        :style="{ height: sliderHeight + 'px' }"
      ></v-tabs-slider>
      <v-tab
        v-for="item in tabs"
        :key="item.id"
        class="header-nav__tab"
        :active-class="disable ? '' : 'v-tabs__item--active'"
        @click="goTo(item.link)"
        nuxt
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: Number,
      default: 0
    },
    sliderHeight: {
      type: Number,
      default: 4
    },
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    goTo(link) {
      this.$emit('navigate', link)
    }
  },
  computed: {
    position: {
      get() {
        return !this.flag ? this.value : 1
      },
      set(val) {
        this.$emit('input', val);
        // if (!this.flag) {
        //   this.flag = true;
        //   setTimeout(() => {
        //     this.flag = false;
        //   })
        // }
      }
    },
    disable() {
      return this.position === -1
    }
  },
  watch: {
    value() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .header-nav{
    position: relative;
    z-index: 1;
    &__slider{
      /*height: 4px;*/
    }
    &__tab{
      margin-left: 30px;
      ::v-deep a{
        padding-right: 0;
        padding-left: 0;
      }
    }
    ::v-deep .v-tabs__bar{
      background: none;
    }
  }
</style>
