import types from '~/store/mutation-types'
// import api from '~/utils/api'

export default {
  namespaced: true,
  state() {
    return {
      documents: null
    }
  },
  mutations: {
    [types.SET_DOCUMENTS](state, { data }) {
      state.documents = data
    },
  },
  actions: {
    async fetchDocuments({ commit, state, getters }) {
      try {
        // commit(types.SET_LOADER, true, { root: true });
        // const data = await this.$axios.$get('https://raw.githubusercontent.com/bestkolobok/bestkolobok.github.io/master/content/documents/2019-06-24-test-json.json');
        const data = await this.$axios.$get('https://api.github.com/repos/komareus/komareus.github.io/contents/content/documents');
        commit(types.SET_DOCUMENTS, { data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        // commit(types.SET_LOADER, false, { root: true });
      }
    }
  },
  getters: {
    // getDocuments: state => state.documents,
    getDocuments: state => state.documents,
  }
}
