// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBa_eUcarHJO2ZHDQBrmz-ANcPF8PMoY5U",
    authDomain: "officialgeekyprince.firebaseapp.com",
    projectId: "officialgeekyprince",
    storageBucket: "officialgeekyprince.appspot.com",
    messagingSenderId: "120125407866",
    appId: "1:120125407866:web:d23339812e7f3bf4b7f1c3",
    measurementId: "G-SD9J22JYGB"
  };

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

