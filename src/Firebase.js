// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeFoaOyyzSoIhCaALnzp_EJLzWtqfpubU",
  authDomain: "mypanchang-rad.firebaseapp.com",
  projectId: "mypanchang-rad",
  storageBucket: "mypanchang-rad.appspot.com",
  messagingSenderId: "554721120407",
  appId: "1:554721120407:web:f4c70bd51a30b6c78519d2",
  measurementId: "G-T9LMW582X0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);