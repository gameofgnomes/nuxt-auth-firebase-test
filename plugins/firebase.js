import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '';

export const auth = firebase.auth();
export default firebase;
