import React from "react";
import { useEffect } from "react";

export default function SmallMenuNavButton({imgSrc, alt, description}){

    useEffect(()=>{
        document.getElementsByClassName('small-menu-nav-button')[0].className = 'small-menu-nav-button small-active-menu-button';

    },[])

    function changeClass(e){
        e.preventDefault();
        document.getElementsByClassName('small-active-menu-button')[0].className = "small-menu-nav-button";
        e.target.className = 'small-menu-nav-button small-active-menu-button';
    }

    return(
        <>
            <button className="small-menu-nav-button" onClick={changeClass}>
                <img className="small-menu-nav-button-img" src={imgSrc} alt={alt}></img>
                <p className="small-menu-button-desc">{description}</p>
            </button>
        </>
    )
}
