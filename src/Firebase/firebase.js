import * as firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDgDquWb87TgSq8iTSrZDOlf8WOR35BdK4",
    authDomain: "hobbweebshop.firebaseapp.com",
    projectId: "hobbweebshop",
    storageBucket: "hobbweebshop.appspot.com",
    messagingSenderId: "300124445735",
    appId: "1:300124445735:web:5f710711347307c8ea4202"
});

export function getFirebase() {
    return app;
}

export function dataBase() {
    return firebase.firestore(app);
}