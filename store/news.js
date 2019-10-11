import types from '~/store/mutation-types'
import api from '~/utils/api'

export default {
  namespaced: true,
  state() {
    return {
      newsIndexList: [],
      newsList: [],
      newsItem: {},
      pageSize: 4
    }
  },
  mutations: {
    [types.SET_NEWS_INDEX_LIST](state, { data }) {
      const list = data.map(item => item.name.split('.')[0])
      state.newsIndexList = list.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      })
    },
    [types.SET_NEWS_LIST](state, { newsList }) {
      state.newsList = newsList
    },
    [types.SET_NEWS_ITEM](state, { data }) {
      state.newsItem = data
    },
  },
  actions: {
    async fetchNewsIndexList({ commit }) {
      try {
        // commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.news.newsIndexList));
        commit(types.SET_NEWS_INDEX_LIST, { data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        // commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchNewsItem({ commit, state, getters }, name) {
      commit(types.SET_NEWS_ITEM, { data: {} })
      try {
        // commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.news.newsItem(name)));
        commit(types.SET_NEWS_ITEM, { data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        // commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchNewsList({ commit, state, getters }, page = 1) {
      const list = () => {
        const start = state.pageSize * (page - 1);
        const end = start + state.pageSize;
        return state.newsIndexList.slice(start, end)
      }
      try {
        commit(types.SET_LOADER, true, { root: true });
        const fetchList = list().reduce((acc, item) => {
          acc.push(this.$axios.$get(encodeURI(api.news.newsItem(item))))
          return acc
        }, [])
        const newsList = await Promise.all(fetchList);
        const newsListMap = newsList.map((item, i) => {
          return { ...item, name: list()[i] }
        })
        commit(types.SET_NEWS_LIST, { newsList: newsListMap })
      } catch (err) {
        throw err
      } finally {
        commit(types.SET_LOADER, false, { root: true });
      }
    }
  },
  getters: {
    getNewsIndexList: ({ newsIndexList }) => newsIndexList,
    getNewsList: state => state.newsList,
    getNewsItem: state => state.newsItem,
    getPageSize: ({ pageSize }) => pageSize,
    getPagesTotal: ({ newsIndexList, pageSize }) => Math.ceil(newsIndexList.length / pageSize),
  }
}
