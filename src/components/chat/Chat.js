import React, { useEffect, useState } from "react"
import SignOut from "../signOut/SignOut"
import {db} from '../fireBase/firebase.js'
import SendMessage from "../sendMessage/SendMessages"


const Chat=()=>{
    const [messages,setMessages]=useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log(messages)
    return(
        <div>
           <SignOut/>
           {messages.map(({id,text,photoURL})=>(  //id,text,photoURL automatically created by google firebase
               <div key={id}>
                   <img  src={photoURL} alt=""/> 
                   <p>{text}</p>



                   </div>
           ))}
           <SendMessage/>



        </div>
    )
}

export default Chat;