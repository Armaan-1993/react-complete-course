import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwjm8aV_ivb8D_IdJvp8rIRMDOOz1X_EY",
    authDomain: "clone-1-679c7.firebaseapp.com",
    databaseURL: "https://clone-1-679c7.firebaseio.com",
    projectId: "clone-1-679c7",
    storageBucket: "clone-1-679c7.appspot.com",
    messagingSenderId: "1060553267828",
    appId: "1:1060553267828:web:9f81aa5642b543d3e74f21",
    measurementId: "G-EDD6ZETN0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
