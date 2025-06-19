import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/medicare/', // <- change based on your repo name
  plugins: [react()],
});
