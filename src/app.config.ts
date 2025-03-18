export default defineAppConfig({
    permission: {
        'scope.userInfo': {
          desc: '用于完善会员信息'
        }
      },
  pages: [
    'pages/index/index',
    'pages/tools/index',
    'pages/works/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#999',
    selectedColor: '#1296db',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/tools/index',
        text: '工具',
      },
      {
        pagePath: 'pages/works/index',
          text: '作品',
      },
      {
        pagePath: 'pages/profile/index',
          text: '我的',
      }
    ]
  }
})
