<template>
  <v-container>
    <page-title>
      Документи
    </page-title>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '~/components/shared/PageTitle'
export default {
  name: 'documents',
  components: { PageTitle },
  // asyncData: async ({ app, $axios }) => {
  //   // console.log('payload', payload)
  //   let page = {};
  //   let testJson = null
  //   try {
  //     // page = await app.$content("/documents").getAll()
  //     // testJson = await $axios.get('https://bestkolobok.github.io/content/documents/2019-06-24-test-json.json')
  //     console.log('testJson', testJson)
  //   } catch (err) {
  //     console.error('ERROR testJson', err)
  //     page = {}
  //   }
  //   return {
  //     page,
  //     testJson
  //   };
  // },
  mounted() {
    // this.getContent();
    // console.log('getContent', this.page)
  },
  methods: {
    ...mapActions({
      fetchDocuments: 'documents/fetchDocuments',
    }),
    async getDocuments() {
      try {
        await this.fetchDocuments()
      } catch (err) {
        console.error('ERROR testJson', err)
      }
    },
    // async getContent() {
    //   const content = await this.$content("/pages").get('/test1')
    //   console.log('getContent', content)
    // }
  },
  computed: {
    ...mapGetters({
      stateDocuments: 'documents/getDocuments',
      // getLoader: 'getLoader',
    }),
  }
}
</script>

<style scoped>

</style>
