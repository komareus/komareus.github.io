<template>
  <v-container class="documents-chapter">
    <page-title>
      {{ chapterName }}
      <template slot="caption">
        {{ chapterTitle }}
      </template>
    </page-title>

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

    <v-layout v-if="pagesTotal > 1" justify-center class="mt-4">
      <v-pagination
        v-model="page"
        :length="pagesTotal"
        :total-visible="isMobile ? 5 : 8"
        :disabled="getLoader"
      ></v-pagination>
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
    async loadPageList(page) {
      try {
        await this.fetchDocumentsList({ chapter: this.chapter, page });
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
    },
    page: {
      get() {
        return +this.$route.query.page || 1
      },
      set(page) {
        this.loadPageList(page)
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .documents-chapter{
    &__card {
      cursor: pointer;
    }
  }
</style>
