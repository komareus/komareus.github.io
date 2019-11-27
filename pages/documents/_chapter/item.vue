<template>
  <v-container
    class="document-item white"
    :class="{ 'mt-3': $breakpoint.is('xsOnly'), 'mt-5': !$breakpoint.is('xsOnly') }"
  >
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
      <v-container grid-list-md fluid pa-0>
        <v-layout wrap>
          <v-flex
            xs12 sm6 md4 lg3
            v-for="(img, ix) in imagesList"
            :key="ix"
          >
            <div class="document-item__item pa-2">
              <v-img
                :src="img"
                :alt="'document_' + ix"
                aspect-ratio="1.7"
                @click.stop="openImg(ix)"
              ></v-img>
            </div>
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
    <a-carousel
      :items="imagesListFull"
      v-model="dialog"
    ></a-carousel>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '~/components/shared/PageTitle';
import ACarousel from '~/components/shared/ACarousel';
import mixins from '~/utils/mixins';
export default {
  name: 'DocumentItem',
  mixins: [mixins],
  components: { ACarousel, PageTitle },
  data() {
    return {
      carousel: 0
    }
  },
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
    openImg(id) {
      this.dialog = id
      // this.carousel = id;
      // this.$nextTick(() => {
      //   this.dialog = true
      // })
    }
  },
  computed: {
    ...mapGetters({
      stateDocumentsItem: 'documents/getDocumentsItem'
    }),
    dialog: {
      get() {
        return this.$route.query.item || this.$route.query.item === 0 ? this.$route.query.item : null;
      },
      set(val) {
        const item = val || val === 0 ? val : undefined;
        this.$router.push({ query: { ...this.$route.query, item } })
      }
    },
    chapter() {
      return this.$route.params.chapter
    },
    imagesList() {
      return this.stateDocumentsItem.img ? this.stateDocumentsItem.img.filter(item => typeof item === 'string') : []
    },
    imagesListFull() {
      return this.imagesList.map(item => this.imgParams(item, { w: '1400' }))
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
    border-radius: 10px;
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
    &__item{
      border: 1px solid $c--general-border;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
    }
  }
</style>
