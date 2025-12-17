import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase
// Reemplaza estos valores con los de tu proyecto en Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBx_ClTlvN4-tc8js8yHCsBqCha8wPHsBM",
  authDomain: "regaloteca-d440d.firebaseapp.com",
  projectId: "regaloteca-d440d",
  storageBucket: "regaloteca-d440d.firebasestorage.app",
  messagingSenderId: "128124153880",
  appId: "1:128124153880:web:fa8f59a77999c11657d36d",
  measurementId: "G-WVH94MM39P"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que necesites
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
