import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'manifest.json', dest: 'dist' },
        { src: 'popup.html', dest: 'dist' },
      ],
      verbose: false,
      hook: 'writeBundle'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/popup.ts',
        background: 'src/background.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
})
