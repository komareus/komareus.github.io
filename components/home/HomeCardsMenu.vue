<template>
  <v-layout
    class="cards-menu"
    row wrap justify-center
  >
    <template v-if="$breakpoint.is('smAndUp')">
      <div
        v-for="card in cards"
        :key="card.id"
        class="px-3 py-2"
      >
        <home-chapter-card
          :card-data="card"
          class="cards-menu__card"
        ></home-chapter-card>
      </div>
    </template>
    <template v-else>
      <v-btn
        v-for="card in cards"
        :key="card.id"
        xs12
        class="cards-menu__mobile-card primary text-xs-center py-2 mt-3"
        :to="card.to"
      >
        {{ card.title }}
      </v-btn>
    </template>
  </v-layout>
</template>

<script>
import HomeChapterCard from '~/components/home/HomeCard.vue'
import config from '~/utils/configs/mainMenu.js';
export default {
  name: 'HomeCardsMenu',
  components: {
    HomeChapterCard
  },
  data() {
    return {
    }
  },
  computed: {
    cards() {
      return config({}).filter(item => item.homeCard && item.imgSrc).map(item => ({ title: item.title, src: item.imgSrc, to: item.to }))
    }
  }
}
</script>

<style scoped lang="scss">
  .cards-menu {
    &__card{
      min-width: 250px;
      max-width: 300px;
    }
    &__mobile-card{
      max-width: 450px;
      width: 100%;
      height: 40px;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(255,255,255,0.8)!important;
    }
  }
</style>
