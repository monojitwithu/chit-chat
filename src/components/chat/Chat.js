import React, { useEffect, useRef, useState } from "react";
import SignOut from "../signOut/SignOut";
import { auth, db } from "../fireBase/firebase.js";
import SendMessage from "../sendMessage/SendMessages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(
          (
            { id, text, photoURL, uid } //id,text,photoURL automatically created by google firebase
          ) => (
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          )
        )}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
