// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpzFd4syh2mhxjVEA5PIs9r4Ztbx8TEo",
  authDomain: "mockprepai.firebaseapp.com",
  projectId: "mockprepai",
  storageBucket: "mockprepai.firebasestorage.app",
  messagingSenderId: "154063099092",
  appId: "1:154063099092:web:0fe69b4dc21ccdf3529741",
  measurementId: "G-VGWSWFSMR5"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db = getFirestore(app);