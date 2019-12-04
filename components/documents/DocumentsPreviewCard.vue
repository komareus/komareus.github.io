<template>
  <section
    class="documents-preview-card white"
    :class="{ 'documents-preview-card--mobile': $breakpoint.is('xsOnly'), 'documents-preview-card--tablet': $breakpoint.is('smAndDown') }"
  >
    <h3
      class="documents-preview-card__title"
      :class="{ 'documents-preview-card__title--mobile': $breakpoint.is('xsOnly'), 'documents-preview-card__title--tablet': $breakpoint.is('smAndDown') }"
    >
      {{ title }}
    </h3>
    <span class="documents-preview-card__date">{{ date | FormatDateTime }}</span>
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
  .documents-preview-card {
    padding: 16px;
    min-height: 40px;
    width: 100%;
    border: 1px solid $c--general-border;
    border-radius: 8px;
    &--tablet{
      padding: 8px 12px;
    }
    &--mobile{
      padding: 6px 12px;
    }
    &__title {
      font-size: 1.4rem;
      margin-bottom: .5rem;
      &--tablet{
        font-size: 1.2rem;
        margin-bottom: .2rem;
      }
      &--mobile{
        font-size: 1rem;
        margin-bottom: 0;
      }
    }
    &__date {
      font-size: 0.8rem;
    }
  }
</style>
