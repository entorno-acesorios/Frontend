// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfiXf79Wip3NDntjSi4UhiL1xdbLRFNbk",
  authDomain: "entorno-acessorios.firebaseapp.com",
  projectId: "entorno-acessorios",
  storageBucket: "entorno-acessorios.firebasestorage.app",
  messagingSenderId: "586040049742",
  appId: "1:586040049742:web:7fde659e342678eb02c31f",
  measurementId: "G-LND6HRSWGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };