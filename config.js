import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBkgLeHJ6BqGD0C6WPk8tQs85bhU6TZzcs",
  authDomain: "book-santa-60bfa.firebaseapp.com",
  projectId: "book-santa-60bfa",
  storageBucket: "book-santa-60bfa.appspot.com",
  messagingSenderId: "270326449901",
  appId: "1:270326449901:web:775ca0c8af6f8b11cd6ee4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
