import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




// // vite.config.js
// export default {
//   // ...otras configuraciones...

//   // Configuración específica para imágenes
//   assetsInclude: ['**/*.png'], // Incluye archivos .png en el proceso de construcción
//   resolve: {
//     alias: {
//       // Define un alias para importar imágenes fácilmente en tu código
//       '@images': path.resolve(__dirname, 'src/assets/images')
//     }
//   }
// };
