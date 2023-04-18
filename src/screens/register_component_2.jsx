import React, {useState}from "react";
import logo from '../assets/bmwlogo.jpg';


const SU1 = (props)=>{
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState("");

    // const onSubmit = (email, password) =>{
    //     const user = new CognitoUser({
    //         Username:email,
    //         Pool: UserPool
    //     });
    //     const authDetails = new AuthenticationDetails({
    //         Username: email,
    //         Password: password,
    //     });
    //     user.authenticateUser(authDetails, {
    //         onSuccess: (data)=>{
    //                     document.getElementById("display").innerHTML = "Signed in as " + data["idToken"]["payload"]["email"];
    //                     localStorage.setItem("username", data["idToken"]["payload"]["email"]);
    //                     localStorage.setItem("authToken", data["idToken"]["jwToken"]);
    //                     localStorage.setItem("refreshToken", data["refreshToken"]["token"]);
    //                     localStorage.setItem("cognitoClientID", data["accessToken"]["payload"]["client_id"]);
    //                     alert("You have been signed in successfully");
    //                     navigate("/home");
        
    //                 },
    //                 onFailure: (err)=>{
    //                     document.getElementById("display").innerHTML = err;
    //                     document.getElementById("display").style.backgroundColor = "var(--primary-color)";
    //                 },
    //                 newPasswordRequired: (data) => {
    //                     document.getElementById("display").innerHTML = "ERROR: Password Reset Required";
    //                     console.log(data);
    //                 }
    //             })
    // }
   

    return(
        <>
        <div className='loginContainer'>
            <div className='logoContainer'>
                <section className='tigress'>
                    <h1>Tigress</h1>
                </section>
                
                <img src={logo} className='logoImage'/>
                <section className='analytics'>
                    <h1>Analytics</h1>
                </section>
            </div>
            <div className='formContainer'>
                <form onSubmit={onsubmit}>  
                    <h2>Register</h2>
                    <div id='display' className='SU1-descriptor'>
                        Please enter your password Credentials
                    </div>
                    
                    <input className='inputBox' placeholder='Your email' value={email} onChange={(event)=> setEmail(event.target.value)}/> <br/>
                    <input className='inputBox' placeholder='Your Password' value={password} onChange={(event)=> setPassword(event.target.value)}/> <br/>
                    <button className='login-submit-button' type="submit">
                        Sign In
                    </button>
                </form>
                <button onClick={()=> props.callBackFN("", "", false)} className="SU1-redirect">
                    Confirm Password
                </button>
            </div>
        </div>
        </>
    )
}

export default SU1;