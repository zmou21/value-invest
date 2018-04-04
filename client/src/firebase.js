//firebase setup
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAXAzb7mHYs8gWbK6soEnqrEqgTmdh4S9I",
  authDomain: "value-invest.firebaseapp.com",
  databaseURL: "https://value-invest.firebaseio.com",
  projectId: "value-invest",
  storageBucket: "value-invest.appspot.com",
  messagingSenderId: "1066197650482"
};
firebase.initializeApp(config);

export default firebase;
