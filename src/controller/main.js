import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwCn2vF7OFw_My_Q-GvZtEOVYzJDo7vR0',
  authDomain: 'hdl-2020-c57a0.firebaseapp.com',
  databaseURL: 'https://hdl-2020-c57a0.firebaseio.com',
  projectId: 'hdl-2020-c57a0',
  storageBucket: 'hdl-2020-c57a0.appspot.com',
  messagingSenderId: '91452063839',
  appId: '1:91452063839:web:6dedc5aca043d99ee69bea',
  measurementId: 'G-0RB9L4XW6X',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
