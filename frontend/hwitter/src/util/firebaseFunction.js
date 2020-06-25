import firebase from "../firebase";

export const logout = () => firebase.auth().signOut();

export const login = () => firebase.auth().signInWithEmailAndPassword(email, password);