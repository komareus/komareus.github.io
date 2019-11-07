<template>
  <section class="news-card pa-3 white">
    <h3 class="news-card__title mb-1">
      {{ title }}
    </h3>
    <span class="news-card__date">{{ date | FormatDateTime }}</span>
  </section>
</template>

<script>
export default {
  name: 'DocumentsPreviewCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
  .news-card {
    min-height: 90px;
    width: 100%;
    border: 1px solid $c--general-border;
    border-radius: 8px;
    &__title {
      font-size: 1.5rem;
    }
    &__date {
      font-size: 0.8rem;
    }
    &__image {
      height: 140px;
    }
  }
</style>
