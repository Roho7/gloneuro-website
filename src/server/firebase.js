// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA_Gw7zY8wbywSFh1qmpJ_iKUOZ4ugE_A",
  authDomain: "gloneuro-website.firebaseapp.com",
  projectId: "gloneuro-website",
  storageBucket: "gloneuro-website.appspot.com",
  messagingSenderId: "214978798503",
  appId: "1:214978798503:web:0d22dbd51952d890410c82",
  measurementId: "G-B321JW4M1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
