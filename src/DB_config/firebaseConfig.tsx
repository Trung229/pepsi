// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7OsBqSn4GcSnqXwjCDaOK9q7_fwyg3n8",
  authDomain: "fir-v9-f1e9c.firebaseapp.com",
  projectId: "fir-v9-f1e9c",
  storageBucket: "fir-v9-f1e9c.appspot.com",
  messagingSenderId: "779766760181",
  appId: "1:779766760181:web:8c9a202dc1ffa37112fbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
