<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="warning-menu">
    <v-menu offset-y left class="warning-menu__menu">
      <button slot="activator" class="warning-menu__button error">
        Важливі повідомлення
      </button>
      <v-list class="warning-menu__list primary--text pt-0">
        <v-list-tile class="warning-menu__title" wrap>
          <h4>Список оголошень</h4>
        </v-list-tile>

        <v-list-tile
          class="compare-header-button__list-tile"
          v-for="(item, index) in list"
          :key="index"
        >
          <v-list-tile-content>
            <v-list-tile-title class="compare-header-button__list-tile-title">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'WarningMenu',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style scoped lang="scss">
  .warning-menu{
    width: 100%;
    &__menu{
      width: 100%;
    }
    &__button{
      height: 28px;
      width: 100%;
      border-radius: 0 0 12px 12px;
      text-transform: uppercase;
    }
    &__list-tile{
      max-width: 400px;
    }
    &__list-tile-title{
      font-size: 0.8rem!important;
    }
    &__title{
      background-color: $c--opacity-blue;
    }
  }
</style>
