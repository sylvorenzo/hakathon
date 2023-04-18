import React, {useState} from 'react';
import logo from '../assets/pa.png';
// import UserPool from "../core/UserPool";
// import {CognitoUser, AuthenticateDetails} from "amazon-cognito-identity-js";
// import {useNavigate } from "react-router-dom";
const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    // const onSubmit = (event)=>{
    //     event.preventDefault();
    //     const user = new CognitoUser({
    //         Username:email,
    //         Pool:UserPool,
    //     });
    //     user.authenticateUser(authDetails, {
    //         onSuccess: (data)=>{
    //             document.getElementById("display").innerHTML = "Signed in as " + data["idToken"]["payload"]["email"];
    //             localStorage.setItem("username", data["idToken"]["payload"]["email"]);
    //             localStorage.setItem("authToken", data["idToken"]["jwToken"]);
    //             localStorage.setItem("refreshToken", data["refreshToken"]["token"]);
    //             localStorage.setItem("cognitoClientID", data["accessToken"]["payload"]["client_id"]);
    //             alert("You have been signed in successfully");
    //             navigate("/home");

    //         },
    //         onFailure: (err)=>{
    //             document.getElementById("display").innerHTML = err;
    //             document.getElementById("display").style.backgroundColor = "var(--primary-color)";
    //         },
    //         newPasswordRequired: (data) => {
    //             document.getElementById("display").innerHTML = "ERROR: Password Reset Required";
    //             console.log(data);
    //         }
    //     })
    // }
    return(
        <div className='loginContainer'>
            <div className='logoContainer'>
                
                
                <img src={logo} className='logoImage'/>
            
            </div>
            <div className='formContainer'>
                <form> {/* add onSubmit here*/ }
                    <h2>Sign In</h2>
                    <div id='display' className='login-descriptor'>
                        Please enter your password Credentials
                    </div>
                    
                    <input className='inputBox' placeholder='Your email' value={email} onChange={(event)=> setEmail(event.target.value)}/> <br/>
                    <input className='inputBox' placeholder='Your Password' value={password} onChange={(event)=> setPassword(event.target.value)}/> <br/>
                    <button className='login-submit-button' type='submit'>
                        Sign In
                    </button>
                    <br/>
                    <a href='./register' className='login-redirect'>
                        Register or Confirm an account
                    </a>
                </form>
            </div>
        </div>
    )
}
export default Login;