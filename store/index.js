import types from '~/store/mutation-types'
// import api from '~/utils/api'

export default {
  namespaced: true,
  state() {
    return {
      globalSpinnerVisible: false,
      loadingVisible: false,
      tableLoadingVisible: false,
      errorPopUp: false,
      accessToken: '',
    }
  },

  mutations: {
    [types.SET_SPINNER_STATUS](state, status) {
      state.globalSpinnerVisible = status;
    },
    [types.SET_LOADER](state, status) {
      state.loadingVisible = status;
    },
    [types.SET_TABLE_LOADER](state, status) {
      state.tableLoadingVisible = status;
    },
    [types.SET_ERROR_POPUP](state, status) {
      state.errorPopUp = status;
    }
  },

  actions: {
    // async getOrgTypes({ commit }) {
    //   try {
    //     const data = await this.$axios.$get(api.dictionaries.orgTypes)
    //     commit(types.SET_ORG_TYPES, data)
    //   } catch (err) {
    //     console.error('getCurrency', err);
    //   }
    // },
    async nuxtServerInit({ commit }, { store }) {
      // try {
      //   // await store.dispatch('authorizationAccessToken');
      //   await Promise.all([
      //     store.dispatch('getPeriods'),
      //   ])
      // } catch (err) {
      //   console.error('INIT_ERR', err);
      // }
    }
  },

  getters: {
    getSpinnerStatus: state => state.globalSpinnerVisible,
    getLoader: state => state.loadingVisible,
    getTableLoader: state => state.tableLoadingVisible,
    getErrorPopUp: state => state.errorPopUp,
  }
}
