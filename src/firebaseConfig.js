// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLRZ0CXSEoS2Z5vc_3hvOdRpxnfy0p5sg",
  authDomain: "noted-app-6cef5.firebaseapp.com",
  projectId: "noted-app-6cef5",
  storageBucket: "noted-app-6cef5.appspot.com",
  messagingSenderId: "668894688558",
  appId: "1:668894688558:web:d187dbe70ee518b55436bf",
  measurementId: "G-789Q6WGFES"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// signin

// const handleSignIn = (auth, provider) => {
//   try{

//   }
// }

export default app;
export {auth, provider, db}

