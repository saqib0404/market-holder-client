// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvrsTrzl4hRZJr2o5r5vBhkFKmcE0mKE8",
    authDomain: "market-holder.firebaseapp.com",
    projectId: "market-holder",
    storageBucket: "market-holder.appspot.com",
    messagingSenderId: "39948183754",
    appId: "1:39948183754:web:12146654001f4f44b7ac33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;