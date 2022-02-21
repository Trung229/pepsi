// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP1JBbDUUr7i7U1gSLM3MrSkNeQlWuiFk",
  authDomain: "pepsi-d1b86.firebaseapp.com",
  projectId: "pepsi-d1b86",
  storageBucket: "pepsi-d1b86.appspot.com",
  messagingSenderId: "33299705191",
  appId: "1:33299705191:web:44c19776c49eb33bd553c2",
  measurementId: "G-5RJD80ELTB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Get a reference to the storage service, which is used to create references in your storage bucket

