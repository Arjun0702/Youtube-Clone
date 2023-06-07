// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,serverTimestamp} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCOz-2eT5xQbs1xnHwG1O1ENO6HH8GE6II",
  authDomain: "yt-clone-50665.firebaseapp.com",
  projectId: "yt-clone-50665",
  storageBucket: "yt-clone-50665.appspot.com",
  messagingSenderId: "463400727755",
  appId: "1:463400727755:web:c96881c1eb566cb158974e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const auth=getAuth();
const provider= new GoogleAuthProvider();
const timestamp=serverTimestamp();

export{ app, db, auth, provider, timestamp};