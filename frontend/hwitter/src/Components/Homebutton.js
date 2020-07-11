//button will send user back to homepage
import React from 'react';
import {useHistory} from 'react-router-dom';


const Homebutton = () =>{
    const history = useHistory();

    const handleClick = () =>{
        history.push("/")
    }
    const secondClick = () =>{
        history.push("/login")
    }
    return(
        <div>
            <button className="HomeButton" onClick={handleClick}>Go Back Home</button>
            <button className="LoginButton" onClick={secondClick}>Login</button>
        </div>
    )

}

export default Homebutton;