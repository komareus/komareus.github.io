import types from '~/store/mutation-types'
import api from '~/utils/api'

export default {
  namespaced: true,
  state() {
    return {
      indexList: [],
      itemsList: [],
      item: {}
    }
  },
  mutations: {
    [types.SET_WARNINGS_INDEX_LIST](state, { data }) {
      const list = data.map(item => item.name.split('.')[0])
      state.indexList = list.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      })
    },
    [types.SET_WARNINGS_LIST](state, itemsList) {
      state.itemsList = itemsList.filter(item => item.active)
    },
    [types.SET_WARNINGS_ITEM](state, { data }) {
      state.item = data
    },
  },
  actions: {
    async fetchWarningsIndexList({ commit }) {
      try {
        // commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.warnings.indexList));
        commit(types.SET_WARNINGS_INDEX_LIST, { data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        // commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchWarningsItem({ commit, state, getters }, name) {
      commit(types.SET_WARNINGS_ITEM, { data: {} })
      try {
        // commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.warnings.item(name)));
        commit(types.SET_WARNINGS_ITEM, { data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        // commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchWarningsList({ commit, state }) {
      const list = state.indexList
      try {
        commit(types.SET_LOADER, true, { root: true });
        const fetchList = list.reduce((acc, item) => {
          acc.push(this.$axios.$get(encodeURI(api.warnings.item(item))))
          return acc
        }, [])
        const warningsList = await Promise.all(fetchList);
        const warningsMap = warningsList.map((item, i) => {
          return { ...item, name: list[i] }
        })
        commit(types.SET_WARNINGS_LIST, warningsMap)
      } catch (err) {
        throw err
      } finally {
        commit(types.SET_LOADER, false, { root: true });
      }
    }
  },
  getters: {
    getWarningsIndexList: ({ indexList }) => indexList,
    getWarningsList: ({ itemsList }) => itemsList,
    getWarningsItem: ({ item }) => item,
  }
}
