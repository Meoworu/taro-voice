module.exports = {
    presets: [
      ['taro', {
        framework: 'react',
        ts: true,
        compiler: 'webpack5',
        hot: true,
        useBuiltIns: 'usage',
        corejs: 3
      }]
    ],
    plugins: [
      '@babel/plugin-transform-optional-chaining',
      '@babel/plugin-transform-nullish-coalescing-operator',
      // ['import', {
      //   libraryName: 'taro-ui',
      //   style: true,
      //   customName: (name) => `taro-ui/lib/components/${name}`
      // }]
    ]
  }
  