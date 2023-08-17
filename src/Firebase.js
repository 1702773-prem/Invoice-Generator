
import firebase from "firebase/compat/app"

import "firebase/compat/firestore"


import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZtMjAR9IClqmQJYM9ZfreSqL14bkI1tQ",
  authDomain: "invoice-e6b8c.firebaseapp.com",
  projectId: "invoice-e6b8c",
  storageBucket: "invoice-e6b8c.appspot.com",
  messagingSenderId: "842561020022",
  appId: "1:842561020022:web:3eef19739f22796dd3ff57",
  measurementId: "G-QH3EFEYSN7"
};

// to connect firebase app

const app = firebase.initializeApp(firebaseConfig)

// to connect with firestore

export const myDatabase =firebase.firestore()


export const auth = getAuth(app)   // to connect our react application with authentication which is present in firebase

export const provider = new GoogleAuthProvider()   // to connect our react application with google authentication