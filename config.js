import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCipJWNB259k2mF5pxpSfpW1GNGIOsWFbI",
  authDomain: "fruit-vege-market.firebaseapp.com",
  projectId: "fruit-vege-market",
  storageBucket: "fruit-vege-market.appspot.com",
  messagingSenderId: "296262262640",
  appId: "1:296262262640:web:5d4fa98adf7879dd0879b5",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
