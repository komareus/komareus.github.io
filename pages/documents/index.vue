<template>
  <v-container>
    <page-title>
      Документи
    </page-title>
    <v-layout justify-center mt-4>
      <!--<h1>Сторінка в стадії розробки</h1>-->
      <documents-navigation-cards
        :list="mainChapters"
      ></documents-navigation-cards>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '~/components/shared/PageTitle'
import DocumentsNavigationCards from '../../components/documents/DocumentsNavigationCards'
export default {
  name: 'documents',
  components: { DocumentsNavigationCards, PageTitle },
  data() {
    return {
      mainChapters: [
        {
          title: 'Правління',
          child: [
            { title: 'Статутні документи', link: 'direction-statutory' },
            { title: 'Договори', link: 'direction-agreements' },
            { title: 'Листування', link: 'direction-letters' },
            { title: 'Протоколи', link: 'direction-protocols' },
            { title: 'Різне', link: 'direction-others' }
          ],
        },
        {
          title: 'Наглядова рада',
          child: [
            { title: 'Протоколи', link: 'supervisory-protocols' },
            { title: 'Інформаційні листи', link: 'supervisory-letters' },
            { title: 'Різне', link: 'supervisory-others' }
          ],
        },
        {
          title: 'Ревізійна комісія',
          child: [
            { title: 'Звіти', link: 'revision-reports' },
            { title: 'Протоколи', link: 'revision-protocols' },
            { title: 'Різне', link: 'revision-others' }
          ],
        },
        {
          title: 'Загальні документи',
          child: [
            { title: 'Різне', link: 'others' }
          ],
        }
      ]
    }
  },
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
