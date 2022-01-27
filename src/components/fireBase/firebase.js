import firebase from "firebase";

const chitChatApp = firebase.initializeApp({
  apiKey: "AIzaSyDtgNuY1j7mVlGitHNgbWR6MKFewZa4mBU",
  authDomain: "chit-chat-b5a04.firebaseapp.com",
  projectId: "chit-chat-b5a04",
  storageBucket: "chit-chat-b5a04.appspot.com",
  messagingSenderId: "827702131623",
  appId: "1:827702131623:web:c28e7f7199318bce239482",
});
const db = chitChatApp.firestore();
const auth = firebase.auth();

export { db, auth };
