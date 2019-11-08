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
    <!--<template v-if="item.img">
      <v-container grid-list-lg fluid>
        <v-layout wrap>
          <div
            v-for="(img, ix) in item.img"
            :key="ix"
          >
            <expandable-image
              class="news-card__image"
              :src="img.src"
              alt="img"
            />
          </div>
        </v-layout>
      </v-container>
    </template>-->
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
  .document-item {
    &__caption{
      padding: 16px;
      border: 1px solid $c--general-border;
      border-radius: 6px;
    }
    &__card {
      min-height: 90%;
    }
  }
</style>
