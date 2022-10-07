import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import VitePluginStyleInject from 'vite-plugin-style-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginStyleInject()
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'antd',
    //       style: (name) => `antd/es/${name}/style/css.js`
    //       // style: (name) => `antd/es/${name}/style`
    //     }
    //   ]
    // })
  ],
  build: {
    minify: 'esbuild',
    lib: {
      entry: './components/index.ts',
      name: 'u2antd',
      fileName: 'u2antd'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'antd',
        '@ant-design/icons'
      ]
    }
  }
});
