// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxbA-PnFbkoStD-s9fTAkn3n8Y8S-uQTQ",
    authDomain: "skill-multiply.firebaseapp.com",
    projectId: "skill-multiply",
    storageBucket: "skill-multiply.appspot.com",
    messagingSenderId: "714409584867",
    appId: "1:714409584867:web:f14a8f51ca7fe4f762bdd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;