import React from "react";
import MenuNavButton from "./MenuNavButton";
import firstSectionData from "../data/menuFirstSection";
import secondSectionData from "../data/menuSecondSection";
import thirdSectionData from "../data/menuThirdSection";
import fourthSectionData from "../data/menuFourthSection";
import { useEffect } from "react";

export default function Menu(){
    useEffect(()=>{
        document.getElementsByClassName('menu')[0].style.display = 'flex';
    })

    return(
        <>
            <div className="menu">
                {/* renders first section of menu bar */}
                {firstSectionData.map((data, index)=>{
                    return <MenuNavButton key={index} imgSrc={data.imgSrc} alt={data.alt} description={data.description}></MenuNavButton>
                })}
                <div className="menu-section-divider">
                </div>

                {/* renders second section of menu bar */}
                {secondSectionData.map((data, index)=>{
                    return <MenuNavButton key={index} imgSrc={data.imgSrc} alt={data.alt} description={data.description}></MenuNavButton>
                })}
                <div className="menu-section-divider">
                </div>

                {/* renders third section of menu bar */}
                <p className="menu-section-header">Explore</p>
                {thirdSectionData.map((data, index)=>{
                    return <MenuNavButton key={index} imgSrc={data.imgSrc} alt={data.alt} description={data.description}></MenuNavButton>
                })}
                <div className="menu-section-divider">
                </div>

                {/* renders fourth section of menu bar */}
                <p className="menu-section-header">More from Youtube</p>
                {fourthSectionData.map((data, index)=>{
                    return <MenuNavButton key={index} imgSrc={data.imgSrc} alt={data.alt} description={data.description}></MenuNavButton>
                })}
                <div className="menu-section-divider">
                </div>

                <p className="menu-section-header">
                    This Project was created by Jonathan Rene for demonstration purposes only.
                </p>

            </div>
        </>
    )
}