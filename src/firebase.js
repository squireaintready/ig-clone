import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAovtuZmfMB-y3FOLh5-ZhZDn5gfIBKsJ4",
    authDomain: "ig-clone-react-516b5.firebaseapp.com",
    databaseURL: "https://ig-clone-react-516b5.firebaseio.com",
    projectId: "ig-clone-react-516b5",
    storageBucket: "ig-clone-react-516b5.appspot.com",
    messagingSenderId: "318390845524",
    appId: "1:318390845524:web:35406f0909cdb729446dc1",
    measurementId: "G-ZZ8FLMDXY8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export{db, auth, storage}