import React, { useState } from "react"
import { db,auth } from "../fireBase/firebase.js"
import {Input,Button} from "@material-ui/core"
import firebase from "firebase"


const SendMessage=({scroll})=>{
    const [message,setMessage]=useState("")



    const inputHandler=(e)=>{
        setMessage(e.target.value)

    }
    async function  sendMessage(e){
        e.preventDefault()
        const {uid,photoURL}=auth.currentUser
        await  db.collection("messages").add({
            text:message,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()

        })
        setMessage('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }


    return(
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                <Input  placeholder="Message" value={message} onChange={inputHandler}/>
                <Button type="submit">Send</Button>
                </div>


                </form>

     
         
        </div>
    )
}


export default SendMessage;