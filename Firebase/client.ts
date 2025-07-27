// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8yPMRCrsfnFSqqKh4sG1qeRkj_dmiRec",
  authDomain: "intense-2619e.firebaseapp.com",
  projectId: "intense-2619e",
  storageBucket: "intense-2619e.firebasestorage.app",
  messagingSenderId: "488155117420",
  appId: "1:488155117420:web:e17f8359ce3f42d349e549",
  measurementId: "G-27FW57R42M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);