import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import {
  getStorage,
  FirebaseStorage,
  ref,
  getMetadata,
} from "firebase/storage";
import {Auth, getAuth , createUserWithEmailAndPassword , UserCredential } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const databse: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);
const auth : Auth = getAuth(app)
export {
  app,
  databse,
  auth,
  addDoc,
  collection,
  storage,
  ref,
  getMetadata,
  doc,
  getDoc,
  setDoc , 
  createUserWithEmailAndPassword
};

export type { UserCredential}
