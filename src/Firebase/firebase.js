import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCbCra8TqPcQnPJb_GvEe4VPdZGXbMmw80",
    authDomain: "hobbies-store.firebaseapp.com",
    projectId: "hobbies-store",
    storageBucket: "hobbies-store.appspot.com",
    messagingSenderId: "49710932213",
    appId: "1:49710932213:web:17828d0aa5c1649cc025bc"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();