// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCREiXQKWzkylnUGJvmC3DFA6Q4BU9lxXI",
    authDomain: "ema-john-simple-97b54.firebaseapp.com",
    projectId: "ema-john-simple-97b54",
    storageBucket: "ema-john-simple-97b54.appspot.com",
    messagingSenderId: "880793995226",
    appId: "1:880793995226:web:31258c4bee8093d082a2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;