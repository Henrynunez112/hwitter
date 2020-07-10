//button will send user back to homepage
import React from 'react';
import {useHistory} from 'react-router-dom';


const Homebutton = () =>{
    const history = useHistory();

    const handleClick = () =>{
        history.push("/")
    }
    return(
        <div>
            <button onClick={handleClick}>Go Back Home</button>
        </div>
    )

}

export default Homebutton;