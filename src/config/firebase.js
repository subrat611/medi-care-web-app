import { initializeApp } from "firebase/app";

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
export const app = initializeApp(firebaseConfig);
