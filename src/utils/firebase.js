// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6gMYVU0Aw3DR_mB3JtEw8juTZ_re1xu0",
  authDomain: "home-ce-coder.firebaseapp.com",
  projectId: "home-ce-coder",
  storageBucket: "home-ce-coder.appspot.com",
  messagingSenderId: "561214029227",
  appId: "1:561214029227:web:fdfd39d6b3212f8f9126ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);