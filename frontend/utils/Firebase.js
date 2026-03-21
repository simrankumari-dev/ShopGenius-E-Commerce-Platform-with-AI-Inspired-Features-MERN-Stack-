import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "shopgenius-2109.firebaseapp.com",
  projectId: "shopgenius-2109",
  storageBucket: "shopgenius-2109.firebasestorage.app",
  messagingSenderId: "55501771115",
  appId: "1:55501771115:web:4f5e4fee89eb93601d3c2e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}


