export default function ({ $axios, redirect, store, res, req, route }) {
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
    // console.log('baseURL ' + $axios.baseURL)
    // console.log('baseURL ' + $axios.defaults.baseURL)
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    // console.log('REQUEST!!!!!', req)
    // console.log('RESPONCE!!!!!', res)
    // console.log('STORE', store.state.accessToken)
    // for(let i in process.env){
    //   console.log('process.env.' + i + ': ', process.env[i])
    // }
    // console.log('config!!!!!', config)
    config.headers.common['Accept'] = `application/json, text/plain`
    config.headers.common['Content-Type'] = `application/json`
  });
  // $axios.onResponse( (config) => {
  //   if (process.browser && config.status === 401) {
  //     // window.location.reload(true)
  //     window.location.replace(window.location.href)
  //     // console.log('The window object:', window.location)
  //   }
  //   }
  // )
}
