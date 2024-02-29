import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA7vId52RkkoxgnuNSwNcrBMoc_6RzNXkE",
    authDomain: "clone-d3c66.firebaseapp.com",
    projectId: "clone-d3c66",
    storageBucket: "clone-d3c66.appspot.com",
    messagingSenderId: "251787771854",
    appId: "1:251787771854:web:6352b6aad898b33900359f",
    measurementId: "G-CQXWRG48KS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}