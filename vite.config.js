import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    // Plugins que se utilizan dentro de la aplicacion
    plugins: [react(), tailwindcss()],
});
