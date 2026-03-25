import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration Details NOTE
const firebaseConfig = {
  apiKey: "AIzaSyCs3j_v5XVSeS85rY1pcUE_Dc_Udzm6pxo",
  authDomain: "virtual-lab-c6e82.firebaseapp.com",
  projectId: "virtual-lab-c6e82",
  storageBucket: "virtual-lab-c6e82.firebasestorage.app",
  messagingSenderId: "773587492552",
  appId: "1:773587492552:web:35c5948b90a29a0b59cffd",
  measurementId: "G-5WKXYQFW7Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();