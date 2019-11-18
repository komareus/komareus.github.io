<template>
  <v-footer
    class="main-footer elevation-4 secondary"
    app
    :class="{ 'caption': $breakpoint.is('xsOnly') }"
    height="auto"
  >
    <v-card
      flat
      tile
      class="main-footer__card secondary"
      width="100%"
    >
      <v-card-text>
        <v-layout class="primary--text" wrap justify-center>
          <div class="main-footer__phone-block text-xs-center mr-4">
            <div class="main-footer__phone-block-phone display-1">
              <a :href="'tel:' + hotLinePhone">
                <v-icon color="primary" size="35">local_phone</v-icon>
                <span>{{ hotLinePhone | FormatPhone }}</span>
              </a>
            </div>
            <div>
              Пн-Пт 9:00 - 18:00
            </div>
          </div>
          <div>
            <button class="main-footer__send-us primary--text mt-1" v-ripple>
              <v-layout align-center>
                <a :href="'tel:' + hotLineMail">
                  <v-icon color="primary" size="35" class="mr-2">
                    mail
                  </v-icon>
                  <span class="subheading">{{ hotLineMail }}</span>
                </a>
              </v-layout>
            </button>
          </div>
          <div class="ml-3">
            <a :href="fbLink" target="_blank">
              <span v-html="icons.facebook" class="main-footer__fb-icon"></span>
            </a>
          </div>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout wrap class="primary--text">
          <!--<v-flex xs12 md6 :class="{ 'mb-3': $breakpoint.is('smAndDown') }">
            <a href="https://publicfinance.gov.ua/" target="_blank" class="main-footer__vpf-link pr-3">{{ $t('home.footer.opf') }}</a>
          </v-flex>-->
          <v-flex xs12 md6 class="text-md-right">
            <span class="main-footer__minfin">© investor182, <span v-if="years > 2019">2019 -</span> {{ years }}</span>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import icons from '~/assets/img/icons/index.js'
export default {
  name: 'AFooter',
  data() {
    return {
      hotLinePhone: '+380442354882',
      hotLineMail: 'oknashdom@gmail.com',
      fbLink: 'https://www.facebook.com/groups/857280307967595',
      icons
    }
  },
  methods: {
  },
  computed: {
    years() {
      const currentYear = (new Date()).getFullYear();
      if (currentYear === 2019) return currentYear;
      return `2019 - ${currentYear}`
    }
  }
}
</script>

<style scoped lang="scss">
  .main-footer{
    position: relative;
    &__phone-block{
      min-width: 286px;
      float: left;
    }
    &__phone-block-phone{
      a{
        transition: color 0.2s ease-in-out;
      }
      &:hover{
        a{
          color: $c--general-orange!important;
        }
        ::v-deep .v-icon{
          animation: swing .8s infinite linear both;
        }
      }
    }
    &__send-us{
      min-width: 154px;
      border-radius: 5px;
      transition: color 0.2s ease-in-out;
      &:hover{
        color: $c--general-orange!important;
        ::v-deep.v-icon{
          animation: point 1.8s infinite linear both;
        }
      }
    }
    &__fb-icon{
      /*width: 20px;*/
      /*height: 20px;*/
      ::v-deep svg {
        width: 44px;
        height: 44px;
        fill: $c--primary;
      }
    }
    &__minfin{
      white-space: nowrap;
    }
    &__vpf-link{
      transition: color 0.2s ease-in-out;
      &:hover{
        color: $c--general-orange!important;
      }
    }
    @keyframes swing {
      10% {
        transform: rotate3d(0, 0, 1, 15deg);
      }

      20% {
        transform: rotate3d(0, 0, 1, -10deg);
      }

      30% {
        transform: rotate3d(0, 0, 1, 5deg);
      }

      40% {
        transform: rotate3d(0, 0, 1, -5deg);
      }

      50% {
        transform: rotate3d(0, 0, 1, 0deg);
      }

      to {
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }
    @keyframes point {
      from, to {
        opacity: .5;
        transform: scale(1);
      }

      50% {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
</style>
