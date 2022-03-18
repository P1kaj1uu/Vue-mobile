// 这个文件是vue.cli搭建项目的配置文件
// 在这个配置文件中，可以对整个项目的构建、打包进行全局的配置

// 导入路径模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = {
  // 打包部署后不用在服务器端也可以打开预览项目
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 通过 less 文件覆盖（文件路径为绝对路径），每次修改后不用重新npm run serve
          // 从盘符开始的是绝对路径
          hack: `true; @import "${ themePath }";`,
        }
      }
    }
  }
}
