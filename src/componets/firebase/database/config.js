import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//Firestore Config File for Project Endless
const firebaseConfig = {
  apiKey: "AIzaSyAHgyfuKwSbzSQ3_cI9z4KqNIaOouF-aoo",
  authDomain: "project-haven-7d4e5.firebaseapp.com",
  projectId: "project-haven-7d4e5",
  storageBucket: "project-haven-7d4e5.appspot.com",
  messagingSenderId: "651260460030",
  appId: "1:651260460030:web:f1d20d42108a8ab14f9eaf",
  measurementId: "G-7VW5CPGYRY"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };