import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqalbecGP11aJVmFEre6iKUwcTI2Vt9Bs",
    authDomain: "jp18-2457a.firebaseapp.com",
    projectId: "jp18-2457a",
    storageBucket: "jp18-2457a.appspot.com",
    messagingSenderId: "400962477885",
    appId: "1:400962477885:web:cb8320b7452374d34aaf54",
    measurementId: "G-3HT3JT3PY2"
  };

  export default firebase.initializeApp(firebaseConfig)
