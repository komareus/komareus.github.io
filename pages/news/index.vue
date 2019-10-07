<template>
  <v-container class="news-list">
    <page-title>
      Новини порталу
    </page-title>
    <v-layout
      v-for="(item, i) in stateNewsList"
      :key="i"
      class="mb-3"
      @click="goToItem(item.name)"
    >
      <news-preview-card
        class="news-list__card"
        :title="item.title"
        :date="item.date"
        :text="item.short"
      ></news-preview-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '~/components/shared/PageTitle'
import NewsPreviewCard from '~/components/news/NewsPreviewCard'
export default {
  name: 'news',
  components: { NewsPreviewCard, PageTitle },
  // async fetch({ store, query }) {
  //   // const page = +query.page;
  //   try {
  //     await store.dispatch('news/fetchNewsIndexList')
  //     await store.dispatch('news/fetchNewsList')
  //   } catch (err) {
  //     console.error(err)
  //   }
  // },
  created() {
    this.loadNewsList();
  },
  methods: {
    ...mapActions({
      fetchNewsIndexList: 'news/fetchNewsIndexList',
      fetchNewsList: 'news/fetchNewsList',
    }),
    async loadNewsList() {
      try {
        await this.fetchNewsIndexList();
        await this.fetchNewsList();
      } catch (err) {
        console.error(err)
      }
    },
    goToItem(name) {
      console.log(name)
      this.$router.push({ name: 'news-item', query: { name: name } })
    }
  },
  computed: {
    ...mapGetters({
      stateNewsIndexList: 'news/getNewsIndexList',
      stateNewsList: 'news/getNewsList',
      // getLoader: 'getLoader',
    }),
  }
}
</script>

<style scoped lang="scss">
  .news-list {
    &__card {
      cursor: pointer;
    }
  }

</style>
