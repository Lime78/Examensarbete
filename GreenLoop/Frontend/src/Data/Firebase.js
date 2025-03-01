// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export const db = getFirestore(app);