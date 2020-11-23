import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs-0WAuC5ZJBGJbcF_R8uFfavJXo6jr9U",
    authDomain: "project-e1c61.firebaseapp.com",
    databaseURL: "https://project-e1c61.firebaseio.com",
    projectId: "project-e1c61",
    storageBucket: "project-e1c61.appspot.com",
    messagingSenderId: "120721328159",
    appId: "1:120721328159:web:819967fc6ddf079a3a2d2a",
    measurementId: "G-14W5X7XN16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
