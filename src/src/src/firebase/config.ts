import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7VrxTgrTqC51AHBVUOrKxCiMlRvPW_lg",
  authDomain: "pk-reward-4ed25.firebaseapp.com",
  projectId: "pk-reward-4ed25",
  storageBucket: "pk-reward-4ed25.firebasestorage.app",
  messagingSenderId: "1017782685836",
  appId: "1:1017782685836:web:e02cb8cf1df29069882ba9",
  measurementId: "G-02VB8CL6BD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerWithEmail = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return await signOut(auth);
};
