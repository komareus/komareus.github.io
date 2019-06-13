<template>
  <v-layout
    class="cards-menu"
    row wrap justify-center
  >
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
      // cards: [
      //   { title: 'НОВИНИ', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      //   { title: 'ДОКУМЕНТИ', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      //   { title: 'ФОТО', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      // ]
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
  }
</style>
