import React from "react";
import "./styles.css"
import InteractiveText from "../InteractiveText";
import IconSocialMedia from "../IconSocialMedia";

export default function Header(){

    function navToggle(){
        const menuNav = document.getElementById("menuNav")
        menuNav.classList.toggle("toggle-nav")
    }  

    function pictureToggle(){
      const picture = document.getElementById("picture")
      picture.classList.toggle("toggle-picture")
    }

    return(
        <header>
        <div className="header">
            <div className = "profile">
                <a href="#" onClick={pictureToggle}><img className = "profile-img" src="https://avatars.githubusercontent.com/u/87502730?s=400&u=dd34bf3c999b627e50e3e3b35cc3f16209706fa3&v=4" alt="profile picture"/></a>
                {/* <div className = "profile-greetings">
                    <p>Hi! I'm Juan</p>
                    <span><InteractiveText /></span>
                </div> */}
            </div>
            <IconSocialMedia/>
            <a href="#" className="menuNav" onClick={navToggle}><div></div><div></div><div></div></a>
        </div>
        <div className="toggle-nav" id="menuNav">
            <div className="menuNav-list" >
                <nav>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Projects</a>              
                </nav>               
            </div>
        </div>
        <div className="toggle-picture" id="picture">
            <div className="picture-container">
                <a href="#" onClick={pictureToggle}><span>X</span></a>
                <img src="https://avatars.githubusercontent.com/u/87502730?s=400&u=dd34bf3c999b627e50e3e3b35cc3f16209706fa3&v=4" alt="profile picture" />
            </div>

        </div>
        </header>
    )
}
