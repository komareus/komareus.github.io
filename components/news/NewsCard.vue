<template>
  <section class="news-card pa-3 white">
    <h3 class="mb-3">
      TITLE
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </section>
</template>

<script>
export default {
  name: 'NewsCard'
}
</script>

<style scoped lang="scss">
  .news-card {
    min-height: 120px;
    border: 1px solid $c--general-border;
    border-radius: 8px;
  }
</style>
