import React from "react";
import SignIn from "./components/signIn/SignIn";
import Chat from "./components/chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth"; //firebase hooks to check sign in or not
import { auth } from "./components/fireBase/firebase.js";

function App() {
  const [user] = useAuthState(auth); //gives true or false value  if logged in user becames true if not logged in becames false
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
