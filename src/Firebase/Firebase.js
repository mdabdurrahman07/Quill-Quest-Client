// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnoEK7qjWuhbcgTmVXI_ICmika8xUHe3E",
  authDomain: "quillquest-92dfc.firebaseapp.com",
  projectId: "quillquest-92dfc",
  storageBucket: "quillquest-92dfc.appspot.com",
  messagingSenderId: "230893332828",
  appId: "1:230893332828:web:610a100d6df33fa3b03999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)