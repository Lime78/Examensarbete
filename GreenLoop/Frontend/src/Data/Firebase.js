// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Ta bort getAnalytics om du inte använder det
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxQcwfuO964Qt2z3lOFP4sXJYG6NzD9Lc",
  authDomain: "greenloop-aea23.firebaseapp.com",
  projectId: "greenloop-aea23",
  storageBucket: "greenloop-aea23.firebasestorage.app",
  messagingSenderId: "136736555738",
  appId: "1:136736555738:web:db99dae404909fed349be3",
  measurementId: "G-3ZHGZ0NET3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Ta bort analytics om du inte använder det
const analytics = getAnalytics(app);

// Exportera bara auth för Authentication
export const auth = getAuth(app);