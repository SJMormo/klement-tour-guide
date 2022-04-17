// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjJv60ZZdrBrEwZqG-RUbGVkQLj13dSec",
    authDomain: "independent-service-prov-22131.firebaseapp.com",
    projectId: "independent-service-prov-22131",
    storageBucket: "independent-service-prov-22131.appspot.com",
    messagingSenderId: "757937396450",
    appId: "1:757937396450:web:1d559516aa654ea70ddcbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
