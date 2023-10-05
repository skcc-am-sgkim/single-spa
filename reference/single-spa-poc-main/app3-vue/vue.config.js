const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    },
  }
})
