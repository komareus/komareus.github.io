<template>
  <div></div>
</template>

<script>
// if (process.browser) {
//   // require('https://identity.netlify.com/v1/netlify-identity-widget.js')
//   // require('https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js')
// }
export default {
  name: 'Home',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        // { src: 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js' }
      ]
    };
  },
  data() {
    return {
      test: 'test2'
    }
  },
  mounted() {
    // require('https://identity.netlify.com/v1/netlify-identity-widget.js')
  }
}
</script>

<style lang="scss" scoped>
  .home-page {

  }
</style>
