// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { NextOrObserver, User, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirebaseConfig } from './config';


// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

// Functions
export const signInUser = async (
  email: string, 
  password: string
) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback:NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth);