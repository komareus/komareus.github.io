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
import netlify from 'netlify-identity-widget'
export default {
  name: 'AdminMenu',
  data() {
    return {
      links: [
        { title: 'Загальне', link: 'https://investor182.netlify.com/admin' },
        { title: 'Правління', link: 'https://investor182.netlify.com/admin-directors' },
        { title: 'Наглядова рада', link: 'https://investor182.netlify.com/admin-supervisory' },
        { title: 'Ревізійна комісія', link: 'https://investor182.netlify.com/admin-revision' }
      ]
    }
  },
  created() {
    this.netlifyInit()
  },
  methods: {
    netlifyInit() {
      netlify.init({
        container: '#netlify-modal' // defaults to document.body,
      });
      netlify.on('init', user => console.log('init', user));
      netlify.on('login', user => console.log('login', user));
      netlify.on('logout', () => console.log('Logged out'));
      netlify.on('error', err => console.error('Error', err));
      netlify.on('open', () => console.log('Widget opened'));
      netlify.on('close', () => console.log('Widget closed'));
    },
    onModalOpen() {
      netlify.open('login');
    }
  },
}
</script>

<style scoped>

</style>
