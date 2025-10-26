
import {initializeApp,  getApp, getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAl6N1u5y2YkgkwRvpR5PB3Gio6hWVsSd8",
  authDomain: "perfprep-5211e.firebaseapp.com",
  projectId: "perfprep-5211e",
  storageBucket: "perfprep-5211e.firebasestorage.app",
  messagingSenderId: "968063905315",
  appId: "1:968063905315:web:c913e23ea8f10568674b96",
  measurementId: "G-TNEQH6LCQ7"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
