<template>
  <v-container class="documents-chapter">
    <page-title>
      {{ chapterName }}
    </page-title>
    <h3 class="documents-chapter__title primary--text">
      {{ chapterTitle }}
    </h3>
    <v-layout
      v-for="(item, i) in documentsList"
      :key="i"
      class="mb-3"
      @click="goToItem(item.name)"
    >
      <documents-preview-card
        class="documents-chapter__card"
        :title="item.title"
        :date="item.date"
      />
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '~/components/shared/PageTitle'
import { mapGetters, mapActions } from 'vuex';
import chapters from '~/utils/configs/documentsChapters.js'
import DocumentsPreviewCard from '~/components/documents/DocumentsPreviewCard'
export default {
  name: 'DocumentsChapter',
  components: { DocumentsPreviewCard, PageTitle },
  data() {
    return {
      chapters
    }
  },
  created() {
    this.initDataList();
    // this.fetchDocumentsIndexList(this.chapter)
  },
  methods: {
    ...mapActions({
      fetchDocumentsIndexList: 'documents/fetchDocumentsIndexList',
      fetchDocumentsList: 'documents/fetchDocumentsList',
    }),
    async initDataList() {
      try {
        await this.fetchDocumentsIndexList(this.chapter);
        await this.fetchDocumentsList({ chapter: this.chapter });
      } catch (err) {
        console.error(err)
      }
    },
    async loadPageNewsList(page) {
      try {
        await this.fetchNewsList(page);
        this.$router.push({ query: { page: page } })
      } catch (err) {
        console.error(err)
      }
    },
    goToItem(name) {
      this.$router.push({ name: 'documents-chapter-item', params: { chapter: this.chapter }, query: { name: name } })
      // this.$router.push({ name: 'news-newsItem', params: { newsItem: name } })
    }
  },
  computed: {
    ...mapGetters({
      stateDocumentsList: 'documents/getDocumentsList',
      statePageSize: 'documents/getPageSize',
      statePagesTotal: 'documents/getPagesTotal',
      getLoader: 'getLoader',
    }),
    documentsList() {
      return this.stateDocumentsList(this.chapter) || []
    },
    pagesTotal() {
      return this.statePagesTotal(this.chapter)
    },
    chapter() {
      return this.$route.params.chapter
    },
    chapterName() {
      const title = this.chapters[this.chapter]
      return title ? title.chapter : ''
    },
    chapterTitle() {
      const title = this.chapters[this.chapter]
      return title ? title.title : ''
    }
  }
}
</script>

<style scoped lang="scss">
  .documents-chapter{
    &__title{
      margin-top: -40px;
      margin-bottom: 40px;
    }
    &__card {
      cursor: pointer;
    }
  }
</style>
