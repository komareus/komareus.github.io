<template>
  <section class="news-card pa-3 white primary--text">
    <page-title class="news-card__title mb-1">
      {{ title }}
      <template slot="caption">
        <div class="grey--text text--lighten-1 mt-2">
          {{ date | FormatDateTime }}
        </div>
      </template>
    </page-title>
    <v-layout column v-for="(item, i) in content" :key="i">
      <div class="mt-3" v-html="$md.render(item.body)"></div>
      <template v-if="item.img">
        <v-layout wrap>
          <div
            v-for="(img, ix) in item.img"
            :key="ix"
            class="news-card__image-container pa-2"
          >
            <img
              class="news-card__image"
              :src="imgParams(img.src, { h: '140' })"
              :alt="'document_' + ix"
              @click.stop="openImg(ix, item.img)"
            >
          </div>
        </v-layout>
      </template>
    </v-layout>
    <a-carousel
      :items="imagesList"
      v-model="dialog"
    ></a-carousel>
  </section>
</template>

<script>
import ACarousel from '~/components/shared/ACarousel';
import mixins from '~/utils/mixins';
import PageTitle from '~/components/shared/PageTitle'
export default {
  name: 'NewsCard',
  mixins: [mixins],
  components: { PageTitle, ACarousel },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    date: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => ([])
    },
    imgUrl: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      imagesList: []
    }
  },
  methods: {
    openImg(id, images) {
      this.imagesList = images.map(item => this.imgParams(item.src, { w: this.fullImgWidth }));
      this.dialog = id
    }
  },
  computed: {
    // addImgUrl() {
    //   // if (process.static) return `https://${api.repositoryName}.github.io`
    //   // if (process.static) return ''
    //   return api.serverImageContentItems
    // }
    dialog: {
      get() {
        return this.$route.query.item || this.$route.query.item === 0 ? +this.$route.query.item : null;
      },
      set(val) {
        const item = val || val === 0 ? val : undefined;
        this.$router.push({ query: { ...this.$route.query, item } })
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .news-card {
    min-height: 90%;
    width: 100%;
    border: 1px solid $c--general-border;
    border-radius: 8px;
    &__title {
      font-size: 1.5rem;
    }
    &__date {
      font-size: 0.8rem;
    }
    /*&__item{
      border: 1px solid $c--general-border;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
    }*/
    &__image-container{
      /*height: 140px;*/
      /*width: auto;*/
      /*max-width: 100%;*/
    }
    &__image {
      height: 140px;
      width: auto;
      max-width: 100%;
      cursor:pointer;
    }
    /*::v-deep .expandable-image{
      img{
        height: 140px;
        width: auto;
        max-width: 100%;
      }
    }*/
  }
</style>
