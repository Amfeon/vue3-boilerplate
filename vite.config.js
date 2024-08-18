import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/

export default ({ mode }) => {
  const plugins = [vue()]

  if (mode === 'dev') {
    plugins.push(vueDevTools())
  }

  return defineConfig({
    plugins,
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js',
        '@': resolve(__dirname, 'src'),
        '~@': resolve(__dirname, 'src')
      }
    }
  })
}

