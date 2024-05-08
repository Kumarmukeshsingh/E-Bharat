// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEOef6dGf1ktR_X8h35ifQxxgVHrxF9yk",
  authDomain: "ecomerce-a7d54.firebaseapp.com",
  projectId: "ecomerce-a7d54",
  storageBucket: "ecomerce-a7d54.appspot.com",
  messagingSenderId: "1063056069281",
  appId: "1:1063056069281:web:88f9d043fb3622308b16e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
