
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBxSMpgQ-BeQnPVSvstE-MkPVgmvKeQySs",
  authDomain: "chat-app-e0324.firebaseapp.com",
  projectId: "chat-app-e0324",
  storageBucket: "chat-app-e0324.appspot.com",
  messagingSenderId: "15147757751",
  appId: "1:15147757751:web:4638bea62bba9aa31a9d32",
  measurementId: "G-2B02NDW3SR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
export default firebase