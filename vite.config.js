import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, "./dist/"),
  plugins: [vue()],
  // Total guess:
  pluginOptions: {
    electronBuilder: {
        // preload: 'src/preload.js',
        preload: 'preload.js',
      builderOptions: {
        extraResources: ['src', 'src/res/', 'src/build/', 'mysqlite.db', 'mytest.db'],
      },
      externals: ['sqlite3'],
    },
  },
  // End of total guess
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