import React from "react";
import { useEffect } from "react";

export default function MenuNavButton({imgSrc, alt, description}){

    useEffect(()=>{
        document.getElementsByClassName('menu-nav-button')[0].className = 'menu-nav-button active-menu-button';

    },[])

    function changeClass(e){
        e.preventDefault();
        document.getElementsByClassName('active-menu-button')[0].className = "menu-nav-button";
        e.target.className = 'menu-nav-button active-menu-button';
    }

    return(
        <>
            <button className="menu-nav-button" onClick={changeClass}>
                <img className="menu-nav-button-img" src={imgSrc} alt={alt}></img>
                <p className="menu-button-desc">{description}</p>
            </button>
        </>
    )
}
