import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import "firebase/compat/firestore";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.database();

export const ordersRef = db(firebaseConfig)



export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  // if user doesnt exist, we have to store information like bellow
  // and to set it, and register that user
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      await userRef.set({
        displayName,
        email,
        userRoles,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise( (resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject);
  })
}

