// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4pC4KWQ-tIKl85plVB3P8o5dil1nH7Js",
  authDomain: "todolist-a4f82.firebaseapp.com",
  projectId: "todolist-a4f82",
  storageBucket: "todolist-a4f82.appspot.com",
  messagingSenderId: "56311979941",
  appId: "1:56311979941:web:2a80a50d51418f2260d24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);