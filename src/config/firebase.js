import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPhoneNumber,
  onAuthStateChanged,
} from "firebase/auth";

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJ_ID,
  VITE_STORG_BUCKET,
  VITE_MSG_SENDER_ID,
  VITE_APP_ID,
  VITE_MES_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJ_ID,
  storageBucket: VITE_STORG_BUCKET,
  messagingSenderId: VITE_MSG_SENDER_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MES_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const phoneNumberSignIn = async (phoneNumber, appVerifier) => {
  return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};

export const onAuthStateChangedListener = (listenerCallback) =>
  onAuthStateChanged(auth, listenerCallback);
