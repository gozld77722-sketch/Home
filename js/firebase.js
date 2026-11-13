import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, onSnapshot, deleteDoc, runTransaction } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { state } from "./state.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_t7MbZDPqc1_myKz7li0oZXzYQCeuyIo",
  authDomain: "winchester-game-150ff.firebaseapp.com",
  projectId: "winchester-game-150ff",
  storageBucket: "winchester-game-150ff.firebasestorage.app",
  messagingSenderId: "965882936080",
  appId: "1:965882936080:web:8598738b4adca24d1e4395"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export { doc, setDoc, getDoc, updateDoc, onSnapshot, deleteDoc, runTransaction };

export function initAuth() {
  signInAnonymously(auth).then(cred => {
    state.currentUser = cred.user;
    state.myPlayerId = cred.user.uid;
  }).catch(err => console.error("Firebase 로그인 오류:", err));
}
