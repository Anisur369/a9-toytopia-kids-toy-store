// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV-HM1aVG4xo45j4C9XJhSux8iHg1NMAw",
  authDomain: "react-routing-project-484a5.firebaseapp.com",
  projectId: "react-routing-project-484a5",
  storageBucket: "react-routing-project-484a5.firebasestorage.app",
  messagingSenderId: "562687543025",
  appId: "1:562687543025:web:97fc9ba7b2a2dadd22cb50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
