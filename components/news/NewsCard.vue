<template>
  <section class="news-card pa-3 white">
    <h3 class="news-card__title mb-1">
      {{ title }}
    </h3>
    <span class="news-card__date">{{ date }}</span>
    <v-layout column v-for="(item, i) in content" :key="i">
      <div class="mt-3" v-html="$md.render(item.body)"></div>
      <template v-if="item.img">
        <v-container grid-list-lg fluid>
          <v-layout wrap>
            <v-flex
              v-for="(img, ix) in item.img"
              :key="ix"
            >
              <img
                class="news-card__image"
                :src="addImgUrl + img.src"
                alt="img"
              >
            </v-flex>
          </v-layout>
        </v-container>
      </template>
    </v-layout>
  </section>
</template>

<script>
import api from '~/utils/api'
export default {
  name: 'NewsCard',
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
  computed: {
    addImgUrl() {
      if (process.static) return `https://${api.repositoryName}.github.io`
      return `https://raw.githubusercontent.com/${api.repositoryName}/${api.repositoryName}.github.io/${api.contentBranch}`
    }
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
    &__image {
      height: 140px;
    }
    img {
      max-width: 100%;
    }
  }
</style>
