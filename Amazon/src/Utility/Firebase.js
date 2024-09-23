
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsI3FrM8djOEm0Lp14QfQRADgYeFoxaIY",
  authDomain: "clone-6336a.firebaseapp.com",
  projectId: "clone-6336a",
  storageBucket: "clone-6336a.appspot.com",
  messagingSenderId: "595477587587",
  appId: "1:595477587587:web:c56946bae9b562554d1db6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()

