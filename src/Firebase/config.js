// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC295m7rfMcEJXBtC7rLQWXzkZ7hByqMK8",
    authDomain: "aracne-e-commerce.firebaseapp.com",
    projectId: "aracne-e-commerce",
    storageBucket: "aracne-e-commerce.appspot.com",
    messagingSenderId: "419182001577",
    appId: "1:419182001577:web:b881ef50efdb91d45798b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
