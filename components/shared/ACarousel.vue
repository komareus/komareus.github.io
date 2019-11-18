<template>
  <div class="a-carousel">
    <v-dialog
      class="a-carousel__dialog"
      v-model="dialog"
      fullscreen
      hide-overlay
    >
      <v-layout class="a-carousel__dialog-wrapper primary">
        <v-carousel
          hide-delimiters
          :cycle="false"
          height="100vh"
          :hide-controls="$breakpoint.is('xsOnly')"
          v-model="carousel"
        >
          <v-carousel-item
            v-for="(img, i) in items"
            :key="i"
            class="a-carousel__item"
            :class="{ 'px-5': !$breakpoint.is('xsOnly'), }"
            active-class="a-carousel__item--active"
            lazy
            :src="img"
          ></v-carousel-item>
        </v-carousel>
        <v-btn
          class="a-carousel__btn a-carousel__btn-right"
          fab flat dark small absolute right
          :color="$breakpoint.is('xsOnly') ? 'accent' : 'white'"
          @click="onClose"
        >
          <v-icon white size="30">
            close
          </v-icon>
        </v-btn>
      </v-layout>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ACarousel',
  props: {
    // item: {
    //   type: Number,
    //   default: 0
    // },
    items: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      // dialog: false,
      // carousel: 0
    }
  },
  methods: {
    onClose() {
      this.dialog = false;
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value || this.value === 0
      },
      set(val) {
        if (!val) {
          this.$emit('input', null)
        }
      }
    },
    carousel: {
      get() {
        return this.value || 0
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
  watch: {
    value(val) {
      this.carousel = val;
    }
  }
}
</script>

<style lang="scss">
  .a-carousel{
    &__dialog{
      /*.v-dialog{*/
        /*max-height: 100%!important;*/
      /*}*/
    }
    /*&__dialog-wrapper{*/
      /*position: relative;*/
      /*width: 100%;*/
    /*}*/
    &__card{
      width: 100%;
      max-height: 100%;
    }
    &__item{
      .v-image__image{
        background-size: contain!important;
      }
    }
  }
</style>
