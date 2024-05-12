import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCSXZBXF_z6lQXxM7MnOUPk_SS3kwUv-6w",
    authDomain: "soniyawebsitedb.firebaseapp.com",
    projectId: "soniyawebsitedb",
    storageBucket: "soniyawebsitedb.appspot.com",
    messagingSenderId: "573204241178",
    appId: "1:573204241178:web:ce10fd3a06921a9dcfaaa3"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const imageDb = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);