// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0pCtTtxQWq5GbyBVNAhvQEyW-cp9uuQo",
  authDomain: "react-learn-1fea2.firebaseapp.com",
  projectId: "react-learn-1fea2",
  storageBucket: "react-learn-1fea2.appspot.com",
  messagingSenderId: "79967053563",
  appId: "1:79967053563:web:9b377e0aaa1a940707f25e",
  measurementId: "G-7RJ0MNN6QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
