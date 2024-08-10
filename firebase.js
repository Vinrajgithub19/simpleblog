import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyAgkH1XlZTkmd_zHV0DW1YOkjCELKhzm8o",
    authDomain: "react-hooks-blog-55bdd.firebaseapp.com",
    projectId: "react-hooks-blog-55bdd",
    storageBucket: "react-hooks-blog-55bdd.appspot.com",
    messagingSenderId: "862723861996",
    appId: "1:862723861996:web:4a3133a04ef8afcd96e4c9"
  };

    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
