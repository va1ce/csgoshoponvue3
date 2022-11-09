const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

// const path = require('path');

// module.exports = {
//   chainWebpack: config => {
//     const oneOfsMap = config.module.rule('scss').oneOfs.store
//     oneOfsMap.forEach(item => {
//       item
//         .use('sass-resources-loader')
//         .loader('sass-resources-loader')
//         .options({
//           resources: [
//             path.resolve(__dirname, './src/styles/common/_mixin.scss'),
//             path.resolve(__dirname, './src/styles/common/_helpers.scss'),
//           ]
//         })
//         .end()
//     })
//   }
// }