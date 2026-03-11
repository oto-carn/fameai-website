// Import Firebase SDKs via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, query, where, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0eVjELzFsjP_1708Adiq6J0iKBhdf90A",
  authDomain: "fameai-3c013.firebaseapp.com",
  projectId: "fameai-3c013",
  storageBucket: "fameai-3c013.firebasestorage.app",
  messagingSenderId: "273458864263",
  appId: "1:273458864263:web:b0397abed786489aabd822",
  measurementId: "G-JF30Z80NZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ===== AUTH FUNCTIONS =====
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);
export const getCurrentUser = () => auth.currentUser;
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

// ===== FIRESTORE FUNCTIONS =====
export const saveUserData = async (userId, email) => {
  await setDoc(doc(db, "users", userId), {
    email,
    createdAt: new Date().toISOString(),
    plan: "free"
  }, { merge: true });
};

export const savePrompt = async (userId, promptData) => {
  const promptsRef = collection(db, "users", userId, "prompts");
  const docRef = await addDoc(promptsRef, {
    ...promptData,
    createdAt: new Date().toISOString(),
    status: "draft"
  });
  return docRef.id;
};

export const updatePrompt = async (userId, promptId, data) => {
  await setDoc(doc(db, "users", userId, "prompts", promptId), data, { merge: true });
};

export const getUserPrompts = (userId, callback) => {
  const promptsRef = collection(db, "users", userId, "prompts");
  const q = query(promptsRef, orderBy("createdAt", "desc"));
  return onSnapshot(q, callback);
};

export const getPromptById = async (userId, promptId) => {
  const docRef = doc(db, "users", userId, "prompts", promptId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};,
