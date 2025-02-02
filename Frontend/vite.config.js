import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: 'localhost',
    port: 4000
  }
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: 'localhost',
//     port: 4000,
//   },
//   build: {
//     outDir: 'dist',  // Ensure the output directory is correct
//     assetsDir: 'assets',  // Ensure assets like CSS, images, etc. go into the 'assets' folder
//   }
// });
