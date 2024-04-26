import React from "react";
import logo from '../logo192.png'


export default function Navbar(){
    return (
        <nav>
            <img src={logo} className="logo" alt="logo"/>
            <h3 className="logotitle">ReactFacts</h3>
            <div className="title-text">
            <button>Home</button>
            <button>About</button>
            </div>
        </nav>
    )
}