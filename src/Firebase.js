//Firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX16DSNOcwMzdkqbTNGuZk6IKvi5PDG7M",
  authDomain: "react-authentication-85f97.firebaseapp.com",
  projectId: "react-authentication-85f97",
  storageBucket: "react-authentication-85f97.appspot.com",
  messagingSenderId: "332817585256",
  appId: "1:332817585256:web:11a21f7491b591d9df17dd",
  measurementId: "G-8Z761M0B66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();


export {app, provider};