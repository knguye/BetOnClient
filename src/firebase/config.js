import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/compat/auth';

// TODO: Replace config values with environment vars for generic login

const firebaseConfig = {
    apiKey: "AIzaSyDMunM6q1NS8cxNROZg2v44x5LauFGEg7k",
    authDomain: "betonclient.firebaseapp.com",
    projectId: "betonclient",
    storageBucket: "betonclient.appspot.com",
    messagingSenderId: "617505022738",
    appId: "1:617505022738:web:458f1b37b8babedbc209cb",
    measurementId: "G-T0PV4XV4J7"
  };

// TODO: Add scopes (get contacts, etc for sharing the app)
/*
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const provider = new GoogleAuthProvider();
*/


if (!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig);
}

export {firebase};