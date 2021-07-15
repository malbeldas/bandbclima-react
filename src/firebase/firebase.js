import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA51DACImZ_jOcNvsae_SIyFq1WBmGXIwk",
    authDomain: "bandbclima-c83c2.firebaseapp.com",
    projectId: "bandbclima-c83c2",
    storageBucket: "bandbclima-c83c2.appspot.com",
    messagingSenderId: "676679262862",
    appId: "1:676679262862:web:256c8e56f8a93f88579fdf"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

// Export DataBase
export const dataBase = fb.firestore()