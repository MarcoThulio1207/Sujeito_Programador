// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhy2KTji7SJYMb8GwnocbTxbv7hsF39h0",
  authDomain: "curso-react-4e979.firebaseapp.com",
  projectId: "curso-react-4e979",
  storageBucket: "curso-react-4e979.firebasestorage.app",
  messagingSenderId: "978241385258",
  appId: "1:978241385258:web:b1d76bbc0b3e6bfb936453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};