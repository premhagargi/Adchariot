/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
   server: {
    allowedHosts: [
      'localhost',
      '61c7-2409-40f2-1049-212f-e92b-227-5c9f-11ce.ngrok-free.app'
    ]
  }
})