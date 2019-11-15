<template>
  <section class="documents-item pa-3 white">
    <h3 class="documents-item__title mb-1">
      {{ title }}
    </h3>
    <span class="documents-item__date">{{ date }}</span>
    <v-layout column v-for="(item, i) in content" :key="i">
      <div class="mt-3" v-html="$md.render(item.body)"></div>
      <template v-if="item.img">
        <v-container grid-list-lg fluid>
          <v-layout wrap>
            <div
              v-for="(img, ix) in item.img"
              :key="ix"
            >
              <expandable-image
                class="documents-item__image"
                :src="img.src"
                alt="img"
              />
            </div>
          </v-layout>
        </v-container>
      </template>
    </v-layout>
  </section>
</template>

<script>
import api from '~/utils/api'
export default {
  name: 'DocumentsItem',
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
      // if (process.static) return `https://${api.repositoryName}.github.io`
      // if (process.static) return ''
      return api.serverImageContentItems
    }
  }
}
</script>

<style scoped lang="scss">
  .documents-item {
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
    /*&__image {*/
      /*img{*/
        /*height: 140px;*/
      /*}*/
    /*}*/
    /deep/.expandable-image{
      img{
        height: 140px;
        width: auto;
        max-width: 100%;
      }
    }
  }
</style>
