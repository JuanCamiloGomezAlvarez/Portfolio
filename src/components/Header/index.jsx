import React from "react";
import "./styles.css"
import InteractiveText from "../InteractiveText";

export default function Header(){
    return(
        <header>
            <div className = "profile">
                <img className = "profile-img" src="https://avatars.githubusercontent.com/u/87502730?s=400&u=dd34bf3c999b627e50e3e3b35cc3f16209706fa3&v=4" alt="profile-photo"/>
                <div className = "profile-greetings">
                    <p>Hi! I'm Juan</p>
                    <span><InteractiveText /></span>
                </div>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Social Media</a>
                <a href="/">Projects</a>
            </nav>
        
        </header>
    )
}
