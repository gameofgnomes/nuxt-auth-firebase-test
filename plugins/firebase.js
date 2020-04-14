import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyCgoG0YbYNo1cxvo-QP3TYmRy-w63vHKBg",
  authDomain: "nuxt-auth-tutorial.firebaseapp.com",
  databaseURL: "https://nuxt-auth-tutorial.firebaseio.com",
  projectId: "nuxt-auth-tutorial",
  storageBucket: "nuxt-auth-tutorial.appspot.com",
  messagingSenderId: "356073305559",
  appId: "1:356073305559:web:60c211bdb96b9178180792"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '';

export const auth = firebase.auth();
export default firebase;
