import React, { useEffect } from "react";
import SmallMenuNavButton from "./SmallMenuNavButton";

export default function SmallMenu(){
    useEffect(()=>{
        document.getElementsByClassName('small-menu')[0].style.display = 'none';
    })

    return(
        <>
           <div className="small-menu">
                <SmallMenuNavButton imgSrc={"./images/menu/home.svg"} description={"Home"}></SmallMenuNavButton>
                <SmallMenuNavButton imgSrc={"./images/menu/shorts.svg"} description={"Shorts"}></SmallMenuNavButton>
                <SmallMenuNavButton imgSrc={"./images/menu/subscriptions.svg"} description={"Subscriptions"}></SmallMenuNavButton>
                <SmallMenuNavButton imgSrc={"./images/menu/library.svg"} description={"Library"}></SmallMenuNavButton>
           </div>
        </>
    )
}