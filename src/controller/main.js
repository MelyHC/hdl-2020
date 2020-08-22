import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz1l49rc0F8w0_zfotzKHAuosScZBHuUI",
  authDomain: "yanapay-latam.firebaseapp.com",
  databaseURL: "https://yanapay-latam.firebaseio.com",
  projectId: "yanapay-latam",
  storageBucket: "yanapay-latam.appspot.com",
  messagingSenderId: "580339374421",
  appId: "1:580339374421:web:4df664a66875f39f1c77dc",
  measurementId: "G-JH4774PZLH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
