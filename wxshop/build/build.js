//npm和node版本检查
require('./check-versions')()
//设置环境变量
process.env.NODE_ENV = 'production'
//是一个命令行转圈圈动画插件
var ora = require('ora')
//用来执行UNIX命令rm和-rf的用来删除文件夹和文件，清空旧文件
var rm = require('rimraf')
//node.js路径模块
var path = require('path')
//引入文件系统
const fs = require('fs')
//用来在命令行中输入不同颜色的文字
var chalk = require('chalk')
//引入webpack模块使用内置插件和webpack方法
var webpack = require('webpack')
//引入config下的index.js配置文件，主要配置一些通用的选项
var config = require('../config')
//生产模式下的webpack配置文件，即webpack.prod.conf
var webpackConfig = require('./webpack.prod.conf')

//引入配置文件信息
// var prodConfig = require('config')
//开启转圈圈效果
var spinner = ora('building for production...')
spinner.start()

//调用rm方法。第一个参数的结果就是dist/static,表示删除这个路径下的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //执行webpack编译
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    //stats对象保存编译过程中的各类消息
    process.stdout.write(stats.toString({
      colors: true,//增加控制台颜色开关
      modules: false,//不增加内置模块信息
      children: false,//不增加子集信息 
      chunks: false,
      chunkModules: false//不将内置模块的信息加到包信息
    }) + '\n\n')
    // //引入配置文件信息
    // const configPath = path.join(__dirname, 'config.js');
    // const distPath = path.resolve(__dirname, '../dist/stats/js/config.js');
    // fs.writeFile(distPath, prodConfig, err => {
    //   if(err) return console.log(err.message)
    //   console.log('New file is coming, give me a new dinner by doudou :P')
    // })

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
