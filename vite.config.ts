import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)  // Use actual mode
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'ChurchToolsCalendar',
      fileName: 'churchtools-calendar',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        assetFileNames: 'churchtools-calendar.[ext]'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
}));
