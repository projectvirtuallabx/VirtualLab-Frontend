import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeF6hRSSDpxvlgTS2uFbFobMX6S4MZ__U",
  authDomain: "virtual-lab-1a214.firebaseapp.com",
  projectId: "virtual-lab-1a214",
  storageBucket: "virtual-lab-1a214.firebasestorage.app",
  messagingSenderId: "292279627246",
  appId: "1:292279627246:web:6e4fd421428a62672972ff",
  measurementId: "G-YB54TMTWVL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();