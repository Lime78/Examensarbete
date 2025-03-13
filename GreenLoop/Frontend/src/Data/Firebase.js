import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };