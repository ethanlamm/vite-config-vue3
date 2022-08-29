import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 服务器选项
  server: {
    port: 8080   // 默认5173，比较难记，可更改为8080
  },
  // 公共基础路径
  base: '/',    // 默认'/'，一般不需要改动
  // 环境选项
  mode: 'staging',
  // 解析选项
  resolve: {
    alias: {
      // src 别名配置
      '@': path.resolve(__dirname, './src'),

      // 可设置图片等静态资源文件夹的别名
      // 静态资源配置注意：
      // 1.设置key时，前面必须加上'/'
      // 2.设置value时，必须是字符串，不能用path.resolve处理
      '/images': '/src/assets/images'
    }
  }
})
