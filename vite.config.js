import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    server:{
      host:true,
      port:5173,
    },
  plugins: [react(), svgr()],
});
