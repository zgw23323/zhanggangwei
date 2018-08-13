// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/main.html'),
    appointmentMain: path.resolve(__dirname, '../dist/appointmentMain.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    proxyTable: {  
      '/wxpay/api': {  //使用"/api"来代替"http://f.apiplus.c"  
        target: 'https://api.xiaobaicar.com', //源地址  https://api.xiaobaicar.com/newapi
        changeOrigin: true, //改变源  
        pathRewrite: {
          '^/wxpay/api': 'https://api.xiaobaicar.com' //路径重写  
        }
      }  
    },
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8888,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //proxyTable: {},
    proxyTable: {  
        '/wxpay/api': {  //使用"/api"来代替"http://f.apiplus.c"  
            target: 'https://api.xiaobaicar.com', //源地址 
            // target: 'http://192.168.2.17', //源地址 
            changeOrigin: true, //改变源  
            pathRewrite: {
              '/wxpay/api': 'https://api.xiaobaicar.com' //路径重写  
              // '^/api': 'http://192.168.2.17' //路径重写  
            }
        },
        '/wxpay/kuaidi': {  //使用"/api"来代替"http://f.apiplus.c"  
            target: 'http://api.kuaidi100.com', //源地址 
            // target: 'http://192.168.2.17', //源地址 
            changeOrigin: true, //改变源  
            pathRewrite: {
                '/wxpay/kuaidi': 'http://api.kuaidi100.com' //路径重写  
              // '^/api': 'http://192.168.2.17' //路径重写  
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  build_test: {
    env: require('./test.env'),
    index: path.resolve(__dirname, '../dist/main.html'),
    index: path.resolve(__dirname, '../dist/appointmentMain.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}