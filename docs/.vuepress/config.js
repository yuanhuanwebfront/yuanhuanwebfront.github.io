module.exports = {
  // 页面根目录
  base: '/',

  // html的标题
  title: '清心小筑',

  // html文件的描述
  description: '页面描述',

  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/assets/img/'
      }
    }
  },


  // 主题配置
  themeConfig: {
    // logo: '/assets/img/room.png',     //  logo

    // 导航栏
    nav: [
      { text: '首页', link: '/'},
      { text: '生活', link: '/life/'},
      { text: '学习', link: '/study/'},
      { text: '简记', link: '/notebook/'},
      { text: '我的收藏', link: '/collection/'}
    ],
    sidebarDepth: 2,
    sidebar: {
      '/life/': [
        ''
      ],
      '/collection/': [
        '',
        'vue',
        'movie'
      ],
      '/study/': [
        '',
        'history',
      ],
      '/notebook/': [
        '',
        'yiqing'
      ],
      '/study/': [
        '',
        'vite',
        'skill'
      ]
    }
  }
}