import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-react-portfolio/', // 👈 Add this line
  plugins: [react()],
})