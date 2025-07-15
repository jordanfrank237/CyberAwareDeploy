import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '5173-izs6dxb4r3ml8piulqy4p-be008e70.manusvm.computer',
      '5173-ilp2mah6jk1iypb2z6y01-be008e70.manusvm.computer'
    ]
  }
})

