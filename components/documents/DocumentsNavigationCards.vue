<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section class="documents-navigation-cards">
    <v-menu
      offset-y
      v-for="(card, i) in list"
      :key="i"
    >
      <template v-slot:activator="{ on }">
        <v-card
          class="documents-navigation-cards__card mb-3 primary"
          v-ripple
          v-on="on"
        >
          <v-card-title primary-title class="white--text title">
            {{ card.title }}
          </v-card-title>
        </v-card>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in card.child"
          :key="index"
          @click="goToChapter(item.link)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </section>
</template>

<script>
export default {
  name: 'DocumentsNavigationCards',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    goToChapter(chapter) {
      if (chapter) {
        this.$router.push({ name: 'documents-chapter', params: { chapter: chapter } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .documents-navigation-cards{
    width: 100%;
    &__card{
      width: 100%;
      cursor: pointer;
      border-radius: 6px;
      &:hover{
        background-color: $c--general-background;
      }
    }
  }
</style>
