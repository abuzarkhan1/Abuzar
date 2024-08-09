import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abuzar-Portfolio/' // Ensure this is set to your deployment path
});
