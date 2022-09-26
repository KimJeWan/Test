import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

const FireBaseConfig = {
    apiKey: "AIzaSyABqMPKMxKCKbEPh6wApOR3NSMd8wKc70E",
    authDomain: "nwitter-198e3.firebaseapp.com",
    projectId: "nwitter-198e3",
    storageBucket: "nwitter-198e3.appspot.com",
    messagingSenderId: "199168596588",
    appId: "1:199168596588:web:2bc2f9a96852f990451649"
  };

  // const app = initializeApp(FireBaseConfig);
  
firebase.initializeApp(FireBaseConfig)

export const firebaseInstance = firebase;

export const authService = firebase.auth()  
export const dbService = getFirestore();



