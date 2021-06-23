import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBY5oHKQOZJconD8X46VGrPRQFur9vwVDE",
  authDomain: "twitter-clone-e2ecf.firebaseapp.com",
  projectId: "twitter-clone-e2ecf",
  storageBucket: "twitter-clone-e2ecf.appspot.com",
  messagingSenderId: "118973184710",
  appId: "1:118973184710:web:7ad1448e3fe323ec3435c7",
  measurementId: "G-F0Z5GNFDMW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;