import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// * Configuración del proyecto dada por firebase
const firebaseConfig = {
  apiKey: "AIzaSyCprqMne1Sf1R04vK03DLsb7YOPlW09DVY",
  authDomain: "sportzone-4597f.firebaseapp.com",
  projectId: "sportzone-4597f",
  storageBucket: "sportzone-4597f.appspot.com",
  messagingSenderId: "1066045705558",
  appId: "1:1066045705558:web:6569fb17b940335b2f5af7",
  measurementId: "G-C3HNGXE6W6"
};

// * Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;