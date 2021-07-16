import React, { useState } from "react"
import {Button} from '@material-ui/core'
import firebase from "firebase"
import {auth}   from "../fireBase/firebase.js"
import img2 from '../img/register.svg'
import img1 from '../img/log.svg'



const SignIn=()=>{
    const [clicked,setClicked]=useState(false)
    const btnClickHandler=()=>{
        clicked?setClicked(false):setClicked(true)

    }

    const  signInWithGoogle=()=>{

        const provider=new firebase.auth.GoogleAuthProvider() //this is the little popup window used to signin
        auth.signInWithPopup(provider)
    
    
    }   
    return(
        // <div classNameName="sign-in">     
        // <Button onClick={signInWithGoogle}>Sign In With Google </Button>
        // </div>
        <div className={`container ${clicked?"sign-up-mode":""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title" >Sign in</h2>
            
            <input type="submit" value="Login" className="btn solid"  onClick={signInWithGoogle} />
            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
           
          </form>
          <form action="#" className="sign-up-form">
          <h2 className="title" >Sign Up</h2>
            
            <input type="submit" className="btn" value="Sign up" onClick={signInWithGoogle} />
            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/> 
            
           
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              This is Group Chat App Sign Up with Your Google Account 
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={btnClickHandler}>
              Sign up
            </button>
          </div>
          <img src={img1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign in To Enter In the Chat Room
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={btnClickHandler}>
              Sign in
            </button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
      </div>
    </div>




    )
}

export default SignIn;