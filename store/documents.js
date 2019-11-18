import { Base64 } from 'js-base64';
import types from '~/store/mutation-types';
import api from '~/utils/api';
const base64Parser = string => JSON.parse(Base64.decode(string.content));

export default {
  namespaced: true,
  state() {
    return {
      indexList: {},
      documentsList: {},
      document: {},
      pageSize: 10
    }
  },
  mutations: {
    [types.SET_INDEX_LIST](state, { chapter, data }) {
      const list = data.map(item => item.name.split('.')[0])
      const sortList = list.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      })
      state.indexList = { ...state.indexList, [chapter]: sortList }
    },
    [types.SET_DOCUMENTS_LIST](state, { docList, chapter }) {
      const list = docList.map(item => ({ ...base64Parser(item), name: item.name }))
      state.documentsList = { ...state.documentsList, [chapter]: list }
    },
    [types.SET_DOCUMENT](state, data) {
      if (data && data.content) {
        state.document = base64Parser(data)
      }
    },
  },
  actions: {
    async fetchDocumentsIndexList({ commit }, chapter) {
      try {
        commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.documents.indexList(chapter)));
        commit(types.SET_INDEX_LIST, { chapter, data })
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchDocumentsList({ commit, state, getters }, { chapter, page = 1 }) {
      const list = () => {
        const start = state.pageSize * (page - 1);
        const end = start + state.pageSize;
        return state.indexList[chapter].slice(start, end)
      }
      try {
        commit(types.SET_LOADER, true, { root: true });
        const fetchList = list().reduce((acc, item) => {
          acc.push(this.$axios.$get(encodeURI(api.documents.documentItem({ chapter, item }))))
          return acc
        }, [])
        const docList = await Promise.all(fetchList);
        const docListMap = docList.map((item, i) => {
          return { ...item, name: list()[i] }
        })
        commit(types.SET_DOCUMENTS_LIST, { docList: docListMap, chapter })
      } catch (err) {
        throw err
      } finally {
        commit(types.SET_LOADER, false, { root: true });
      }
    },
    async fetchDocumentItem({ commit, state, getters }, { chapter, item }) {
      commit(types.SET_DOCUMENT, { data: {} })
      try {
        commit(types.SET_LOADER, true, { root: true });
        const data = await this.$axios.$get(encodeURI(api.documents.documentItem({ chapter, item })));
        commit(types.SET_DOCUMENT, data)
      } catch (err) {
        // commit(types.SET_DOCUMENTS, true, { root: true });
        throw err
      } finally {
        commit(types.SET_LOADER, false, { root: true });
      }
    },
  },
  getters: {
    getDocumentsIndexList: ({ indexList }) => chapter => indexList[chapter],
    getDocumentsList: ({ documentsList }) => chapter => documentsList[chapter],
    getDocumentsItem: ({ document }) => document,
    getPageSize: ({ pageSize }) => pageSize,
    getPagesTotal: ({ indexList, pageSize }) => {
      return (chapter) => {
        const list = indexList[chapter]
        if (list && list.length) return Math.ceil(list.length / pageSize)
        return 0
      }
    }
  }
}
