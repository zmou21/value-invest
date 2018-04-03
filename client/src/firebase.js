//firebase setup

import firebase from 'firebse';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAXAzb7mHYs8gWbK6soEnqrEqgTmdh4S9I",
  authDomain: "value-invest.firebaseapp.com",
  databaseURL: "https://value-invest.firebaseio.com",
  projectId: "value-invest",
  storageBucket: "",
  messagingSenderId: "1066197650482"
};
firebase.initializeApp(config);

export default firebase;
