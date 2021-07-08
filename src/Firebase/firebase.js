import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDgDquWb87TgSq8iTSrZDOlf8WOR35BdK4",
    authDomain: "hobbweebshop.firebaseapp.com",
    projectId: "hobbweebshop",
    storageBucket: "hobbweebshop.appspot.com",
    messagingSenderId: "300124445735",
    appId: "1:300124445735:web:5f710711347307c8ea4202"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore(); 