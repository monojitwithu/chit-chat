import React from "react"
import {Button} from '@material-ui/core'
import firebase from "firebase"
import {auth}   from "../fireBase/firebase.js"



const SignIn=()=>{

    const  signInWithGoogle=()=>{

        const provider=new firebase.auth.GoogleAuthProvider() //this is the little popup window used to signin
        auth.signInWithPopup(provider)
    
    
    }   
    return(
        <>
        <Button onClick={signInWithGoogle}>Sign In With Google </Button>
        </>
    )
}

export default SignIn;