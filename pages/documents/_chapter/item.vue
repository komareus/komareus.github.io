<template>
  <v-container class="document-item">
    <page-title>
      {{ stateDocumentsItem.title }}
      <template slot="caption">
        {{ stateDocumentsItem.date | FormatDateTime }}
      </template>
    </page-title>
    <v-layout v-if="stateDocumentsItem.description" class="document-item__caption primary--text">
      <p class="ma-0">
        {{ stateDocumentsItem.description }}
      </p>
    </v-layout>
    <template v-if="imagesList.length > 0">
      <v-container grid-list-lg fluid pa-0>
        <v-layout wrap>
          <v-flex
            xs12 sm6 md3 lg2 xl1
            v-for="(img, ix) in imagesList"
            :key="ix"
          >
            <expandable-image
              class="document-item__image"
              :src="img"
              :alt="'document_' + ix"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </template>

    <v-layout v-if="fileUrl" mt-3>
      <v-btn
        color="primary"
        class="mx-0"
        @click="forceFileDownload(fileUrl)"
      >
        Завантажити документ
      </v-btn>
    </v-layout>

    <v-layout v-if="fileLink">
      <a class="document-item__link primary--text title" :href="fileLink" target="_blank">Посилання на документ</a>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '~/components/shared/PageTitle'
export default {
  name: 'DocumentItem',
  components: { PageTitle },
  created() {
    const itemName = this.$route.query.name;
    if (itemName) {
      this.getDocumentItem(itemName)
    } else {
      this.$router.push({ name: 'documents' })
    }
  },
  methods: {
    ...mapActions({
      fetchDocumentItem: 'documents/fetchDocumentItem',
    }),
    getDocumentItem(item) {
      this.fetchDocumentItem({ chapter: this.chapter, item })
    },
    forceFileDownload(url) {
      const link = document.createElement('a');
      link.href = url;
      document.body.appendChild(link);
      link.click()
    },
  },
  computed: {
    ...mapGetters({
      stateDocumentsItem: 'documents/getDocumentsItem'
    }),
    chapter() {
      return this.$route.params.chapter
    },
    imagesList() {
      return this.stateDocumentsItem.img ? this.stateDocumentsItem.img.filter(item => typeof item === 'string') : []
    },
    fileUrl() {
      return this.stateDocumentsItem.file
    },
    fileLink() {
      return this.stateDocumentsItem.link
    }
  }
}
</script>

<style scoped lang="scss">
  .document-item {
    &__caption{
      padding: 16px;
      border: 1px solid $c--general-border;
      border-radius: 6px;
    }
    &__card {
      min-height: 90%;
    }
    &__link{
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>
