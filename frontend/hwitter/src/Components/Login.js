import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Logo from "../Imgs/Twitter_Logo_WhiteOnImage.png";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     try{
    //         await 
    //     }catch(){

    //     }

    // }

    return(
        <div className="loginContainer">
                <img alt="twitter logo" src={Logo}/>
                <form>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email}/>
                    <input onChange={(e) =>setPassword(e.target.value)} placeholder="Password" value={password}/>
                    <button type="submit">Log In</button>
                </form>
            <h1>Log In to Twitter</h1>

        </div>
    )
};
export default Login;