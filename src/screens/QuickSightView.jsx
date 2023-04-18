import React from "react";
import logo from '../assets/pa.png'


const QuickSightView = ()=>{


    return(
        <>
        <nav className="navbar">

             <section>
                <img src={logo} className="navbarLogo" />
            </section> 
            <section>
                <h1>Dashboard</h1>
            </section>
            <section>
                <button className="signOut">
                    Sign Out 
                </button>
            </section>
        </nav>
        <div>

        </div>
        
        </>
    )
}
export default QuickSightView;
