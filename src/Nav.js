import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css"
import netflix from "./images/netflix.png"
function Nav() {
    const [show, handleshow] = useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY > 100){
            handleshow(true);
        }else{
            handleshow(false);
        }
    }
    const history=useHistory();
    useEffect
    (() => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
                onClick={()=>history.push("/")}
                className="nav__logo"
                src={netflix}
                alt=""
            />
            <img
                onClick={()=>history.push("/profile")}
                className="nav__avatar"
                src="https://i.pinimg.com/736x/4b/0c/d0/4b0cd02569a15ece506329fd82c83351.jpg"
                alt=""
            />
            </div>
            
        </div>
    )
}

export default Nav
