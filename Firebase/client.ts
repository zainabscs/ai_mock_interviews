// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCt6i9Nyo9P_UvkX7fmlEu0ad5Mx_3-0wk",
    authDomain: "prepwise-c6f38.firebaseapp.com",
    projectId: "prepwise-c6f38",
    storageBucket: "prepwise-c6f38.firebasestorage.app",
    messagingSenderId: "1056084865769",
    appId: "1:1056084865769:web:c907654834ccb8964ab678",
    measurementId: "G-HRB7PFG30F"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);