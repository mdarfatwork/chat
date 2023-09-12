import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDn8heZhThvrBTE5dLPxNDs4JuKS4MXyr8",
  authDomain: "chat-arfat.firebaseapp.com",
  projectId: "chat-arfat",
  storageBucket: "chat-arfat.appspot.com",
  messagingSenderId: "244848849854",
  appId: "1:244848849854:web:922f41a3f285d7e565ffef"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()