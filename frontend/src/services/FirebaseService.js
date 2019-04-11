import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNNstOZDqMr9Gss7r6EEGVFjiZXtaF2dE",
    authDomain: "reblog-81fc1.firebaseapp.com",
    databaseURL: "https://reblog-81fc1.firebaseio.com",
    projectId: "reblog-81fc1",
    storageBucket: "reblog-81fc1.appspot.com",
    messagingSenderId: "392703190800"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;