<template>
  <section class="news-card pa-3 white">
    <h3 class="news-card__title">
      {{ title }}
    </h3>
    <span class="news-card__date">{{ date | FormatDateTime }}</span>
    <v-divider />
    <v-layout wrap class="mt-3">
      <span>{{ text }}</span>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'NewsPreviewCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
  .news-card {
    min-height: 120px;
    width: 100%;
    border: 1px solid $c--general-border;
    border-radius: 8px;
    &__title {
      /*font-size: 1.5rem;*/
    }
    &__date {
      font-size: 0.8rem;
    }
    &__image {
      height: 140px;
    }
  }
</style>
