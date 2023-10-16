
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5zyb2iwqGsO5cNS3YvLl2pEYFWJWSpEo",
  authDomain: "fir-todo-app-5c942.firebaseapp.com",
  projectId: "fir-todo-app-5c942",
  storageBucket: "fir-todo-app-5c942.appspot.com",
  messagingSenderId: "590200579884",
  appId: "1:590200579884:web:317a529c6637d9734b2e89"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

