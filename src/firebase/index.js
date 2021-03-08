import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA3KUKZ0t5RSfAtUlHmXKyQw2SXG-da6Eg",
  authDomain: "wordapp-eb1bc.firebaseapp.com",
  projectId: "wordapp-eb1bc",
  storageBucket: "wordapp-eb1bc.appspot.com",
  messagingSenderId: "883793788165",
  appId: "1:883793788165:web:d124ab260eaecb754a4b6c",
  measurementId: "G-M1FZGRNPWG",
};
// Initialize Firebase=====main.jsで実行するとリロード時に実行されるからdbがundefinedになるので気を付ける
console.log(888);
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
export default  db;
