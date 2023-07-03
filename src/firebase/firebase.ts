// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { NextOrObserver, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirebaseConfig } from './config';


// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

// Functions
export const signUpUser = async (
  email: string, 
  password: string
) => {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (
  email: string, 
  password: string
) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback:NextOrObserver<User>) => {
  return auth.onAuthStateChanged(callback);
}

export const SignOutUser = async () => await signOut(auth);