import React, { useState } from 'react'
function Usestate () {
    const [button ,setButton] = useState(true)
    const [para, setPara] = useState(true)

    const SignIn=()=> {
        setButton(false)
        setPara(false)
    }
const SignOut= ()=>{
        setButton(true)
        setPara(true)
    }
    return (
       
            
            <div>
            {
                para ? (<p>please sign in </p>) : (<p>welcome back, good to see you in here</p>)
            }
            {
                button ? (<button onClick={SignIn}>sign in</button>) : (<button onClick={SignOut}>sign out</button>)
            }

        </div> 
           

        
    )
}

export default Usestate

