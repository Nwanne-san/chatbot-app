// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB9cd1ECA1ceoWkqSEfT8jkfw3gRhRijU",
  authDomain: "chatbot-69eb5.firebaseapp.com",
  projectId: "chatbot-69eb5",
  storageBucket: "chatbot-69eb5.appspot.com",
  messagingSenderId: "610010458834",
  appId: "1:610010458834:web:887ed9957d7b8e9c9f1b0b",
  measurementId: "G-07BW6BM4NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authentication = getAuth(app)

export {authentication}