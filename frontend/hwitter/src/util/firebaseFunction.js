import firebase from "./firebase";
import "firebase/firestore";

//instance os firebase
const db = firebase.firestore()

export const logOut = () => firebase.auth().signOut();

export const logIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const getFirebaseIdToken = () =>
  firebase.auth().currentUser.getIdToken(false);
