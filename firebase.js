import * as firebase from "firebase";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAUxeVDpNXWkl8uGugVwCCBYABp8xTZY",
  authDomain: "awesomeproject-26c11.firebaseapp.com",
  databaseURL: "https://awesomeproject-26c11-default-rtdb.firebaseio.com",
  projectId: "awesomeproject-26c11",
  storageBucket: "awesomeproject-26c11.appspot.com",
  messagingSenderId: "158831059998",
  appId: "1:158831059998:web:a149237be8318142573a0f",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export { auth };