<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="warning-menu">
    <v-menu v-if="list.length > 0" offset-y left class="warning-menu__menu">
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
          @click="goToItem(item)"
        >
          <v-list-tile-content>
            <v-list-tile-title class="compare-header-button__list-tile-title">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ dialogData.title }}
        </v-card-title>
        <v-card-text>
          <div v-html="$md.render(dialogData.text)"></div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            ЗАКРИТИ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  },
  data() {
    return {
      dialog: false,
      dialogData: {
        text: '',
        title: ''
      }
    }
  },
  methods: {
    goToItem(item) {
      this.dialogData = item;
      this.dialog = true;
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
      cursor: pointer;
    }
    &__list-tile-title{
      font-size: 0.8rem!important;
    }
    &__title{
      background-color: $c--opacity-blue;
    }
  }
</style>
