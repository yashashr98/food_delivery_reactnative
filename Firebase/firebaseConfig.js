import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBvnRh0EpoKL88ZP47TpbM0pOdpeDyYMnM",
  authDomain: "foodapp2-9b4b6.firebaseapp.com",
  projectId: "foodapp2-9b4b6",
  storageBucket: "foodapp2-9b4b6.appspot.com",
  messagingSenderId: "619331100144",
  appId: "1:619331100144:web:763ae916b465db51319135"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }