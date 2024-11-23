import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm4Xjkb4GlcqZMsvs93HwGtfCntdVDxjM",
  authDomain: "insurebazaar.firebaseapp.com",
  databaseURL: "https://insurebazaar-default-rtdb.firebaseio.com",
  projectId: "insurebazaar",
  storageBucket: "insurebazaar.firebasestorage.app",
  messagingSenderId: "36529346033",
  appId: "1:36529346033:web:d90f19341c10f742aa6050",
  measurementId: "G-Z371T0SFWG",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
