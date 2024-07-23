import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Configura caminhos relativos
  build: {
    outDir: 'dist', // Diretório de saída para os arquivos estáticos
  },
});