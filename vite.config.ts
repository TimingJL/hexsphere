import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    define: {
      'process.env': {},
    },
    base: '/hero',
    resolve: {
      alias: {
        src: '/src',
      },
    },
    server: {
      host: 'localhost',
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
    },
    plugins: [
      react(),
    ],
  };
});
