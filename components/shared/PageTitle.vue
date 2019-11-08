<template>
  <section
    class="page-title primary--text"
    :class="{ 'page-title--mobile': $breakpoint.is('xsOnly'), 'page-title--tablet': $breakpoint.is('smAndDown') }"
  >
    <h1
      class="page-title__title"
      :class="{ 'page-title__title--mobile': $breakpoint.is('xsOnly'), 'page-title__title--tablet': $breakpoint.is('smAndDown') }"
    >
      <slot></slot>
    </h1>
    <h3
      class="page-title__caption"
      :class="{ 'page-title__caption--mobile': $breakpoint.is('xsOnly'), 'page-title__caption--tablet': $breakpoint.is('smAndDown') }"
    >
      <slot name="caption"></slot>
    </h3>

    <v-divider
      class="page-title__divider"
      :class="{ 'page-title__divider--mobile': $breakpoint.is('xsOnly'), 'page-title__divider--tablet': $breakpoint.is('smAndDown') }"
    />
  </section>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style scoped lang="scss">
  .page-title{
    margin-bottom: 3rem;
    &--tablet{
      margin-bottom: 2rem;
    }
    &--mobile{
      margin-bottom: 1rem;
    }
    &__title{
      font-size: 2rem;
      &--tablet{
        font-size: 1.8rem;
      }
      &--mobile{
        font-size: 1.4rem;
      }
    }
    &__caption{
      &--tablet{
        font-size: 1.2rem;
      }
      &--mobile{
        font-size: 1rem;
      }
    }
    &__divider{
      margin-top: 1rem;
      &--tablet{
        font-size: .8rem;
      }
      &--mobile{
        margin-top: .6rem;
      }
    }
  }
</style>
