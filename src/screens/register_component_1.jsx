import React, {useState}from "react";
import logo from '../assets/pa.png';


const SU1 = (props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const onSubmit = (event) =>{
    //     event.preventDefault();

    //     UserPool.signUp(email, password, [], null, (err, data)=>{
    //         if(err){
    //             document.getElementById("display").innerHTML = err;
    //             document.getElementById("display").style.backgroundColor = "var(--primary-color)";
    //         }else {
    //             props.callBackFN(data["user"]["username"], password, true);
    //         }
    //     })
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
                <button onClick={()=> props.callBackFN("", "", false)} className="SU1-redirect" style={{marginLeft:"5%"}}>
                    Confirm Password
                </button>
            </div>
        </div>
        </>
    )
}

export default SU1;