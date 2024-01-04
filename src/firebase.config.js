// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwiGsESDgfLf5XjZ6HTqcci5Nf5RpAAS0",
  authDomain: "halal-jibika-bb3a9.firebaseapp.com",
  projectId: "halal-jibika-bb3a9",
  storageBucket: "halal-jibika-bb3a9.appspot.com",
  messagingSenderId: "425795354253",
  appId: "1:425795354253:web:cca90c98d90fb3e125acc4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;