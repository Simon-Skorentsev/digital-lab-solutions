import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: { 
        name: "Digital Lab Solutions",
        description: "Digital Lab Solutions test task",
        theme_color: '#FFFFFF',
        icons: [
        { src: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
        { src: "/images/icon-512.png", type: "image/png", sizes: "512x512" },
        { src: "./images/maskable_icon_x192.png", type: "image/png", sizes: "192x192", purpose: "maskable" }
        ]
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
      ],
    }
  }
})