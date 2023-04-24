import React from "react";

export default function MenuNavButton({imgSrc, description}){
    return(
        <>
            <button className="menu-nav-button">
                <img></img>
                {description}
            </button>
        </>
    )
}