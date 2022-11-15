import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'Calendar',
      formats: ['es', 'umd'],
      // // the proper extensions will be added
      // fileName: 'calendar.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'less'],
      input: {
        index: path.resolve(__dirname, 'src/lib/index.tsx'),
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].[format].js',
        globals: {
          react: 'React'
        },
      },
    }
  },
});

