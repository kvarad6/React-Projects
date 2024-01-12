// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOKwyRSA8ILqZEYpQHNYxhkApiMiN4M-A",
    authDomain: "fir-login-77115.firebaseapp.com",
    projectId: "fir-login-77115",
    storageBucket: "fir-login-77115.appspot.com",
    messagingSenderId: "176776184108",
    appId: "1:176776184108:web:7b76cfaec1cb964f9eac89",
    measurementId: "G-S3D30QL2CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);