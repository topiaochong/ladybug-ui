const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  lintOnSave:false,//关闭组件名称检测
  transpileDependencies: true
})
