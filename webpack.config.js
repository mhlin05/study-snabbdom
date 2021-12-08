const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    //   虚拟打包路径 publicPath
    publicPath: 'xuni',
    filename: 'bundle.js'
  },
  devServer: {
    //   静态资源文件夹
    contentBase: 'www',
    port: 8080
  }
}
