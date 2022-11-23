// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHpgLn6iwc_FhkxeNeSBseix1FrNn8JM8",
  authDomain: "patenseonline.firebaseapp.com",
  projectId: "patenseonline",
  storageBucket: "patenseonline.appspot.com",
  messagingSenderId: "919663695776",
  appId: "1:919663695776:web:85e87ea7e855bb8173f6c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)