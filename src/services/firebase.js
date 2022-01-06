import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyBom8NU3qwnF38UsrzgucB_1AVqrZvpi4E",
  authDomain: "fb-chatty-react.firebaseapp.com",
  projectId: "fb-chatty-react",
  storageBucket: "fb-chatty-react.appspot.com",
  messagingSenderId: "97203128727",
  appId: "1:97203128727:web:37719025e1216d411fdcd2"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
