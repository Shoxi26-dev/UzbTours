import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        tours: path.resolve(__dirname, 'pages/tours.html'),
        gallery: path.resolve(__dirname, 'pages/gallery.html'),
        about: path.resolve(__dirname, 'pages/about.html'),
        contacts: path.resolve(__dirname, 'pages/contacts.html'),
        services: path.resolve(__dirname, 'pages/services.html'),
        'tours-info': path.resolve(__dirname, 'pages/tours-info.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    port: 3000
  }
})