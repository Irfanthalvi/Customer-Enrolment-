import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD8eeUQ-Gsj494_AadPywebqThO7BE6W2U",
  authDomain: "customer-enrollment.firebaseapp.com",
  projectId: "customer-enrollment",
  storageBucket: "customer-enrollment.appspot.com",
  messagingSenderId: "583825751675",
  appId: "1:583825751675:web:3f5d38905a7a9848f76cde"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export const db = fireDb.database().ref("customers"); 