import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export const auth = firebase.auth();
export const storage = firebase.storage();
export const store = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {

  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user);
    // history.push('/mainpage')
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out');
    }).catch((error) => {
      console.log(error.message)
    })
  }