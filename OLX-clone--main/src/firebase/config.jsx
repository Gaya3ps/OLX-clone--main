
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBoW233ldk-jSvgt6H4MXxEZVywDG2UL9U",
  authDomain: "olx-clone-65ad6.firebaseapp.com",
  projectId: "olx-clone-65ad6",
  storageBucket: "olx-clone-65ad6.appspot.com",
  messagingSenderId: "31112338450",
  appId: "1:31112338450:web:94e019454f2fd61bcb8ccb",
  measurementId: "G-RNHV43NL7Y"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, auth ,firestore};

