// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlx6NDjtsG5vlFI7g9k1LoyhrWykoa2qc",
  authDomain: "contactapp-3dc87.firebaseapp.com",
  projectId: "contactapp-3dc87",
  storageBucket: "contactapp-3dc87.appspot.com",
  messagingSenderId: "820879610225",
  appId: "1:820879610225:web:0ca7fbf8d9ca33084a26d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const  db=getFirestore(app)