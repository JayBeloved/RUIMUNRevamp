// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIZaPjGzi6_8dh3Cl1T_wk3_W0ieVfaDc",
  authDomain: "ruimun-8f0f8.firebaseapp.com",
  projectId: "ruimun-8f0f8",
  storageBucket: "ruimun-8f0f8.firebasestorage.app",
  messagingSenderId: "277296574472",
  appId: "1:277296574472:web:beccc5f52fb1678b84e1bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
