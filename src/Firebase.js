// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMi-O4DXltMkxU98ZhnQKnoy8ben6O9Lg",
  authDomain: "chat-app-public.firebaseapp.com",
  projectId: "chat-app-public",
  storageBucket: "chat-app-public.appspot.com",
  messagingSenderId: "128666627225",
  appId: "1:128666627225:web:4472c875df2df969701c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();