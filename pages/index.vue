<template>
  <section class="home-page">
    <v-parallax
      class="home-page__paralax px-0"
      src="img/home/paralax.jpg"
      height="800"
    >
      <v-layout
        class="home-page__subtitle-layout"
        justify-center fill-height align-center my-5
      >
        <v-layout class="home-page__subtitle-wrapper" wrap justify-center fill-height align-center>
          <v-flex xs12 class="text-xs-center">
            <h3 class="home-page__subtitle primary--text">
              Сайт інвесторів житлового комплексу "ТРИ БОГАТИРІ"
            </h3>
            <p class="grey--text lighten-2 title">
              м.Київ, вул Борщагівська, 182 В
            </p>
          </v-flex>
        </v-layout>
      </v-layout>

      <v-container
        grid-list-xl
        py-0 my-5
      >
        <home-cards-menu></home-cards-menu>
      </v-container>
    </v-parallax>

    <!--<v-parallax
      class="home-page__paralax"
      dark
      src="img/home/paralax.jpg"
      height="150"
    ></v-parallax>-->
  </section>
</template>

<script>
import HomeCardsMenu from '~/components/home/HomeCardsMenu.vue'
export default {
  name: 'HomeCard',
  components: {
    HomeCardsMenu
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    width: 100%;
    &__paralax{
      width: 100%;
    }
    &__paralax-title{
      padding: 10px 30px;
      background-color: rgba(0,0,0,.5);
      border-radius: 20px;
      font-size: 60px;
      text-shadow: 2px 2px 4px black;
    }
    &__subtitle{
      font-size: 2rem;
    }
    &__subtitle-layout{
      margin: 0 -14px;
    }
    &__subtitle-wrapper{
      background-color: rgba(255,255,255,.8);
      height: 160px;
    }
    &__card{
      min-width: 250px;
      max-width: 300px;
    }
  }
</style>
