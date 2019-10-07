module.exports = {
  // api: function (isStatic) {
  //   return {
  //     baseURL: "http://localhost:3000",
  //     browserBaseURL: isStatic ? process.env.BASE_URL : ""
  //   }
  // },
  content: [
    [
      'documents',
      {
        page: '/documents/_slug',
        permalink: '/documents/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ],
    // [
    //   'projects',
    //   {
    //     page: '/projects/_slug',
    //     permalink: '/projects/:slug',
    //     isPost: false,
    //     generate: ['get', 'getAll']
    //   }
    // ]
  ]
}
