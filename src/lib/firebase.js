import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcr7r_LznWamTcTaMi_pE6iaIK3mU1nXo",
  authDomain: "soc-med-app-64313.firebaseapp.com",
  projectId: "soc-med-app-64313",
  storageBucket: "soc-med-app-64313.appspot.com",
  messagingSenderId: "230133366698",
  appId: "1:230133366698:web:f59095888c5459d37cb5d3",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
