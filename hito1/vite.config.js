import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Hito1/', // Reemplaza 'Hito1' con el nombre de tu repositorio
  build: {
    outDir: 'dist', // Asegúrate de que 'dist' sea la carpeta que estás utilizando para el despliegue
  },
});