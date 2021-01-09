import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4HHxL4uI5-YgkbjDn7gykU6C8erirH1k",
    authDomain: "data-79409.firebaseapp.com",
    databaseURL: "https://data-79409-default-rtdb.firebaseio.com",
    projectId: "data-79409",
    storageBucket: "data-79409.appspot.com",
    messagingSenderId: "90374845820",
    appId: "1:90374845820:web:b4a614db4f49e4f1a060f9",
    measurementId: "G-WRVJ2L87PF"
};

firebase.initializeApp(firebaseConfig);
export default firebase;