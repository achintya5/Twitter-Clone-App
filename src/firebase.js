import firebase from "firebase";

const firebaseConfig = {
  // Enter your firebase config here.
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
