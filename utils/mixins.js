export default {
  methods: {
    imgParams(url, params) {
      const paramsString = Object.keys(params).reduce((acc, id) => acc + `,${id}_${params[id]}`, 'c_fit,q_auto')
      const urlArr = url.split('/');
      urlArr[6] = paramsString;
      return urlArr.join('/')
    }
  },
  computed: {
    fullImgWidth() {
      if (this.$breakpoint.is('xsOnly')) return '504';
      if (this.$breakpoint.is('smAndDown')) return '864';
      if (this.$breakpoint.is('mdAndDown')) return '1168';
      return '1600'
    },
  }
}
