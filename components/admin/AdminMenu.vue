<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <button class="main-toolbar__log-in primary--text" v-ripple v-on="on">
        <v-icon color="primary">
          input
        </v-icon> Службовий вхід
      </button>
    </template>
    <v-list>
      <v-list-tile
        v-for="(item, index) in links"
        :key="index"
      >
        <a :href="item.link" target="_blank">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </a>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'AdminMenu',
  data() {
    return {
      links: [
        { title: 'Загальне', link: 'https://investor182.netlify.com/admin' },
        { title: 'Правління', link: 'https://investor182.netlify.com/admin-directors' },
        { title: 'Наглядова рада', link: 'https://investor182.netlify.com/admin-revision' },
        { title: 'Ревізійна комісія', link: 'https://investor182.netlify.com/admin-supervisory' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
