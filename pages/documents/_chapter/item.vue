<template>
  <v-container class="news-item">
    <!--<news-card
      class="news-item__card"
      :title="stateNewsItem.title"
      :date="stateNewsItem.date"
      :content="stateNewsItem.body"
    ></news-card>-->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewsCard from '~/components/news/NewsCard'
export default {
  name: 'DocumentItem',
  components: { NewsCard },
  created() {
    const itemName = this.$route.query.name;
    // const itemName = this.$route.params.newsItem;
    if (itemName) {
      this.getDocumentItem(itemName)
    } else {
      // this.$router.push({ name: 'news' })
    }
  },
  methods: {
    ...mapActions({
      fetchDocumentItem: 'documents/fetchDocumentItem',
    }),
    getDocumentItem(item) {
      this.fetchDocumentItem({ chapter: this.chapter, item })
    }
  },
  computed: {
    ...mapGetters({
      stateDocumentsItem: 'documents/getDocumentsItem'
    }),
    chapter() {
      return this.$route.params.chapter
    },
  }
}
</script>

<style scoped lang="scss">
  .news-item {
    &__card {
      min-height: 90%;
    }
  }
</style>
