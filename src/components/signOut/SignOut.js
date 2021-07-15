import { Button } from "@material-ui/core"
import  React from "react"
import {auth} from '../fireBase/firebase.js'



const SignOut=()=>{

    return(
        <div>
            <Button onClick={()=>auth.signOut()}>Sign Out</Button>

        </div>
    )
}


export default SignOut;