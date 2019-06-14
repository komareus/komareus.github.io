<template>
  <v-container>
    <page-title>
      Новини порталу
    </page-title>
    <v-layout
      v-for="(item, i) in 20"
      :key="i"
      class="mb-3"
    >
      <news-card></news-card>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '~/components/shared/PageTitle'
import NewsCard from '~/components/news/NewsCard'
export default {
  name: 'news',
  components: { NewsCard, PageTitle }
}
</script>

<style scoped>

</style>
