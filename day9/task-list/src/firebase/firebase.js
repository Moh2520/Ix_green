// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg8Qx3E8NabyLttW7G1WyHVbpw3TNMKI0",
  authDomain: "task-list-green-session-95b8c.firebaseapp.com",
  projectId: "task-list-green-session-95b8c",
  storageBucket: "task-list-green-session-95b8c.appspot.com",
  messagingSenderId: "1042622824998",
  appId: "1:1042622824998:web:d5f226380f4b3f01599ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);

export {
  firestore
}

