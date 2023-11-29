// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1ZMYoB7T8PDqudcf_UiTLsYt4RVf8fI",
  authDomain: "navigatoo-fe0b4.firebaseapp.com",
  projectId: "navigatoo-fe0b4",
  storageBucket: "navigatoo-fe0b4.appspot.com",
  messagingSenderId: "757903973506",
  appId: "1:757903973506:web:b7a071f5d3cebd51d3689b"
};

  


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);


