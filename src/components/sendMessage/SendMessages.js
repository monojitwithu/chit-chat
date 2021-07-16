import React, { useState } from "react"
import { db,auth } from "../fireBase/firebase.js"
import {Input,Button} from "@material-ui/core"
import firebase from "firebase"


const SendMessage=()=>{
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
            createdAt:firebase.firestore.FieldValue.serverTimestamp()

        })
        setMessage('')
    }


    return(
        <div>
            <form onSubmit={sendMessage}>
                <Input  placeholder="Message" value={message} onChange={inputHandler}/>
                <Button type="submit">Send</Button>


                </form>

     
         
        </div>
    )
}


export default SendMessage;