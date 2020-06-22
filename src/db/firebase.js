import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  apiKey: "AIzaSyBqngD8E4VgkbEA2Mvt3MkjOoYSRx3KGbg",
  authDomain: "e-shop-b1fea.firebaseapp.com",
  databaseURL: "https://e-shop-b1fea.firebaseio.com",
  projectId: "e-shop-b1fea",
  storageBucket: "e-shop-b1fea.appspot.com",
  messagingSenderId: "36133026851",
  appId: "1:36133026851:web:1115e5b68bc1d52bbe8596",
  measurementId: "G-Z972KKMLF8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...aditionalData
      });
    } catch (error) {
      console.log("error creating user", error.measge);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
