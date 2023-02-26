import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCwAxx1X4MBkAmQrm6Z8o8xjk_I713216o',
  authDomain: 'linoteone.firebaseapp.com',
  projectId: 'linoteone',
  storageBucket: 'linoteone.appspot.com',
  messagingSenderId: '168417576180',
  appId: '1:168417576180:web:5b9f4c9d5946a2f9fdcaa1',
};

// init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

// init auth
const auth = getAuth();

// timestamp
export { auth, db };
