import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, "./dist/"),
  plugins: [vue()],
  pluginOptions: {
    electronBuilder: {
        preload: 'src/preload.js',
      builderOptions: {
        extraResources: ['src', 'src/res/'],
      },
      externals: ['sqlite3'],
    },
  },
})

// vue.config.js
// module.exports = {
//   transpileDependencies: ['vuetify'],
//   pluginOptions: {
//     electronBuilder: {
//         preload: 'src/preload.js',
//       builderOptions: {
//         extraResources: ['src', 'src/res/'],
//       },
//       externals: ['knex', 'sqlite3'],
//     },
//   },
// };