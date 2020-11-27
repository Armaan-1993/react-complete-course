import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDKUaZOzsslRvE1fdGwANyZx_QmAVBFmDQ",
    authDomain: "crown-shopping-2b385.firebaseapp.com",
    databaseURL: "https://crown-shopping-2b385.firebaseio.com",
    projectId: "crown-shopping-2b385",
    storageBucket: "crown-shopping-2b385.appspot.com",
    messagingSenderId: "1046728592601",
    appId: "1:1046728592601:web:c3b9b7b0608a328bac82c8",
    measurementId: "G-V22M2TD3NC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
